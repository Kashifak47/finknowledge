import crypto from 'crypto';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature, email } = req.body;

    const sign = razorpay_order_id + "|" + razorpay_payment_id;
    const expectedSign = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(sign.toString())
      .digest("hex");

    if (expectedSign === razorpay_signature) {
      // Signature is genuine! Update Google Sheet status to "Paid"
      if (process.env.VITE_APP_SCRIPT_URL) {
        try {
          await fetch(process.env.VITE_APP_SCRIPT_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              email: email,
              paymentStatus: 'Paid',
              orderId: razorpay_order_id,
              paymentId: razorpay_payment_id
            })
          });
        } catch (sheetErr) {
          console.error("Failed to update Google Sheet to Paid:", sheetErr);
        }
      }

      return res.status(200).json({ 
        success: true, 
        message: "Payment verified successfully" 
      });
    } else {
      return res.status(400).json({ 
        success: false, 
        message: "Invalid payment signature" 
      });
    }
  } catch (error) {
    console.error("Verification error:", error);
    return res.status(500).json({ error: "Internal server error during verification" });
  }
}