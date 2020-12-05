import nodemailer from "nodemailer";
import nodemailerSendgrid from "nodemailer-sendgrid";
import dotenv from "dotenv";
dotenv.config();

const transport = nodemailer.createTransport(
  nodemailerSendgrid({
    apiKey: process.env.SENDGRID_API_KEY
  })
);

const sendConfirmationEmail = async (user,token) => {
  const link=`${process.env.APP_URL}/api/${process.env.API_VERSION}/user/confirmation/${token}`
  await transport.sendMail({
    from: `${process.env.EMAIL_SENDER}`,
    to: `${user.username} <${user.email}>`,
    subject: "Fimboo email confirmation",
    text: "and easy to do anywhere",
    html: `<div>Dear <strong>${user.firstname},</strong></div><br>
    <div>Click the link below to confirm the email</div><br/>
    <div>${link}</div> `,
  });
};

const verifyConfirmation = async(user)=>{
  await transport.sendMail({
    from: `${process.env.EMAIL_SENDER}`,
    to: `${user.username} <${user.email}>`,
    subject: "Fimboo email varification",
    text: "Thank you for email verification",
    html: `<div>Dear <strong>${user.firstname},</strong></div><br>
    <div>Thank you for verifying your email</div><br/>
    `,
  });

}

const sendResetEmail=async(user,token)=>{
  const link=`${process.env.PROTOCOL}://${process.env.APP_URL}/api/${process.env.API_VERSION}/reset_password/${token}`
  await transport.sendMail({
    from:`${process.env.EMAIL_SENDER}`,
    to:`${user.fullname} <${user.email}>`,
    subject:"Fimboo reset password",
    text: "and easy to do anywhere, even with Node.js",
    html:`<div>Dear <strong>${user.firstname},</strong></div><br>
    <div>Click the link below to reset password</div><br/>
    <div>${link}</div>`

  })

}
const resetConfirmation =async(user)=>{

  await transport.sendMail({
    from:`${process.env.EMAIL_SENDER}`,
    to:`${user.username} <${user.email}>`,
    subject:"Fimboo reset password confirmation",
    text: "reset password confirmation",
    html:`<div>Dear <strong>${user.firstname},</strong></div><br>
    <div>Thank you for resetting the password</div><br/>`

  })

}
export default {
  sendResetEmail,resetConfirmation,sendConfirmationEmail,verifyConfirmation
};
