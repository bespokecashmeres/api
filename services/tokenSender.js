const nodemailer = require("nodemailer");
const { generateEmailHtmlForgotPassword } = require("../utils/email");
const { config } = require("../config/config");

const transporter = nodemailer.createTransport({
  host: config.EMAIL_HOST,
  port: config.EMAIL_PORT,
  service: config.GMAIL,
  auth: {
    user: config.PROVIDER_MAIL,
    pass: config.PROVIDER_PASS,
  },
  secure: config.EMAIL_SECURE === 'true',
});

module.exports.sendForgotPasswordEmail = async (user_email, url) => {
  try {

    const htmlContent = generateEmailHtmlForgotPassword(url);
    const mailConfigurations = {
      from: config.SENDER_EMAIL,
      to: user_email,
      subject: config.RESET_PASSWORD,
      html: htmlContent,
    };

    transporter.sendMail(mailConfigurations, function (error, info) {
      if (error) return error;
      return info;
    });
  }
  catch (error) {
  };

};
