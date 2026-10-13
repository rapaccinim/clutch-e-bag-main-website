import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(req, res) {
    try {
        // Plain text on purpose: user input is never rendered as HTML, so nothing to escape.
        await sendgrid.send({
            to: "info@clutchebag.com",
            from: "info@clutchebag.com",
            subject: "New email from Clutch-e Bag website contact page",
            text: `You've got a new mail from ${req.body.name} ${req.body.email}\n\n` +
                `Phone (optional): ${req.body.phone}\n\n` +
                `${req.body.message}`,
        });
    } catch (error) {
        return res.status(error.statusCode || 500).json({ error: error.message });
    }

    return res.status(200).json({ error: "" });
}

export default sendEmail;