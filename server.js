require("dotenv").config();
const express = require("express");
const cors = require("cors");
const Stripe = require("stripe");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors());
app.use(express.json());

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);  // Load Stripe Key

// Dummy Pricing Table (Hidden from Clients)
const pricing = {
    "Tactical Security": 50,
    "Unarmed Security Guards": 30,
    "Armed Security Guards": 60,
    "Mobile Patrol Services": 40,
    "Fire Watch Security": 35,
    "Construction Site Security": 32,
    "Alarm Response Security": 45
};

// 📌 API: Generate Quote & Send Email
app.post("/api/generate-quote", async (req, res) => {
    try {
        const { fullName, email, serviceType, numGuards, startDate, duration } = req.body;

        let totalCost = 0;
        serviceType.forEach(service => {
            totalCost += (pricing[service] || 30) * numGuards * 8; // Assume 8-hour shifts
        });

        // 🟢 Generate Stripe Payment Link
        const stripeSession = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            line_items: [{
                price_data: {
                    currency: "usd",
                    product_data: { name: "Security Service" },
                    unit_amount: totalCost * 100,
                },
                quantity: 1,
            }],
            mode: "payment",
            success_url: "http://localhost:5500/success.html",
            cancel_url: "http://localhost:5500/cancel.html",
        });

        // 🟢 Send Quote Email
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });

        const mailOptions = {
            from: "noreply@xtremesecurity.com",
            to: email,
            subject: "Your Security Guard Service Quote – Xtreme Security Inc.",
            text: `Dear ${fullName},

Here is your estimated quote:

📍 Service: ${serviceType.join(", ")}
👮 Number of Guards: ${numGuards}
📅 Start Date: ${startDate}
🕒 Duration: ${duration}
💰 Hourly Rate per Guard: $${pricing[serviceType[0]]}
🛡 Total Estimated Cost: $${totalCost}

Click below to confirm your booking:
🟢 [Pay Now](${stripeSession.url})

For urgent assistance, call 1 (800) 730-3712.

Best regards,
Xtreme Security Inc.
`
        };

        await transporter.sendMail(mailOptions);
        res.json({ message: "Quote sent successfully", url: stripeSession.url });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(3000, () => console.log("✅ Server running on port 3000"));