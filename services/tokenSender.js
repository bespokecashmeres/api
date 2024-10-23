const { generateEmailHtmlForgotPassword } = require("../utils/email");
const { config } = require("../config/config");
const sendEmail = require("../utils/sendMail");

module.exports.sendForgotPasswordEmail = async (user_email, url) => {
  try {
    const htmlContent = generateEmailHtmlForgotPassword(url);
    await sendEmail(user_email, config.RESET_PASSWORD, "", htmlContent);
  } catch (error) {}
};

module.exports.sendEmailVerificationEmail = async (user_email, url) => {
  try {
    const htmlContent = generateEmailHtmlForgotPassword(url);
    await sendEmail(user_email, config.EMAIL_VARIFICATION, "", htmlContent);
  } catch (error) {}
};
