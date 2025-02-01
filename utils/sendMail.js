const nodemailer = require("nodemailer");
const { config } = require("../config/config");

// Configure Nodemailer transporter with environment variables
const transporter = nodemailer.createTransport({
    host: 'smtp.office365.com', // Use the correct SMTP server
    port: 587, // Use the correct port (587 for TLS)
    secure: false, // Set to false for TLS
    service: 'hotmail',
    auth: {
        user: 'contact@bespokecashmeres.com',
        pass: 'Malou194869!!',
    }
});

// Common function to send emails
async function sendEmail(to, subject, text, html) {
    try {
        const info = await transporter.sendMail({
            from: 'contact@bespokecashmeres.com',
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
