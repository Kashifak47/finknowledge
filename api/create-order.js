import Razorpay from 'razorpay';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, phone, format, category } = req.body;

    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_KEY_SECRET,
    });

    const options = {
      amount: 39900, // ₹399 in paise
      currency: "INR",
      receipt: "rcpt_" + Date.now(),
      notes: { name, email, phone }
    };

    const order = await razorpay.orders.create(options);

    // 1. Log initial Lead as "Pending" in Google Sheet via Google Apps Script Web App
    if (process.env.VITE_APP_SCRIPT_URL) {
      try {
        await fetch(process.env.VITE_APP_SCRIPT_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name,
            email,
            phone,
            format,
            category,
            paymentStatus: 'Pending',
            orderId: order.id,
            paymentId: 'N/A'
          })
        });
      } catch (sheetErr) {
        console.error("Error logging pending lead to sheet:", sheetErr);
      }
    }
    
    return res.status(200).json({
      success: true,
      orderId: order.id,
      amount: order.amount,
      currency: order.currency,
      keyId: process.env.RAZORPAY_KEY_ID
    });

  } catch (error) {
    console.error("Error creating Razorpay order:", error);
    return res.status(500).json({ error: "Failed to create payment order" });
  }
}