const nodemailer = require("nodemailer");
const { config } = require("../config/config");

// Configure Nodemailer transporter with environment variables
const transporter = nodemailer.createTransport({
    host: config.EMAIL_HOST,
    port: config.EMAIL_PORT,
    secure: config.EMAIL_SECURE === 'true',
    service: config.GMAIL,
    auth: {
        user: config.PROVIDER_MAIL,
        pass: config.PROVIDER_PASS,
    }
});

// Common function to send emails
async function sendEmail(to, subject, text, html) {
    try {
        const info = await transporter.sendMail({
            from: config.EMAIL_FROM,
            to,
            subject,
            text,
            html
        });

        console.log('Email sent:', info.messageId);
    } catch (error) {
        console.error('Error sending email:', error);
    }
}

module.exports = sendEmail; 