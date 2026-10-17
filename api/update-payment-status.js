export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { email, status } = req.body; // status will be "Cancelled"

    if (process.env.VITE_APP_SCRIPT_URL) {
      await fetch(process.env.VITE_APP_SCRIPT_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: email,
          paymentStatus: status // "Cancelled"
        })
      });
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Status update error:", error);
    return res.status(500).json({ error: "Failed to update status" });
  }
}