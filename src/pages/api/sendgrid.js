import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(req, res) {
    try {
        console.log("REQ.BODY", req.body);
        await sendgrid.send({
            to: "info@clutchebag.com",
            from: "info@clutchebag.com",
            subject: "New email from Clutch-e Bag website contact page",
            html: `<div>
                        <p>You've got a new mail from ${req.body.name} ${req.body.email}</p>
                        <p>Phone (optional): ${req.body.phone}</p>
                        <p>${req.body.message}</p>
                    </div>`,
        });
    } catch (error) {
        return res.status(error.statusCode || 500).json({ error: error.message });
    }

    return res.status(200).json({ error: "" });
}

export default sendEmail;