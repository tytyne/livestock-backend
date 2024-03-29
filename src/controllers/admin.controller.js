import AdminService from "../services/admin.service";
import UserService from "../services/user.service";
import customMessage from "../utils/customMessage.js";
import errorMessage from "../utils/errorMessage";
import helper from "../utils/helpers";
import Mailer from "../utils/mail/email.js";
import responses from "../utils/responses.js";
import statusCode from "../utils/statusCode.js";
import { jwtToken } from "../utils/jwt.utils.js";
const { hashPassword, decryptPassword }=helper;
const { v4: uuidv4 } = require('uuid');

const { createAdmin, getAdminByIdOrEmail, updateAdmin } = AdminService;
const {createUser}=UserService
const {
  signedup,
  accountVerified,
  emailAssociate,
  resend,
  userVerification,
  loggedin,
} = customMessage;
const {
  emailOrUsernameNotFound,
  thisAccountVerified,
  thisAccountNotVerified,
  emailOrPasswordNotFound,
  accountNotActivated
} = errorMessage;
const { created, ok, badRequest } = statusCode;
const { successResponse, errorResponse } = responses;

/**
 * @description this controller deals with user signup
 */
export default class UserControllers {
  /**
   * @description this controller saves/signup a user in database
   * @param {object} req request
   * @param {object} res response
   * * @param {object} next jump to error
   * @return {object} return json object with signup message
   */
  static async createUserRegistration(req, res, next) {
    try {
      const formData = req.body;
      const textPassword = "uhr5zw4r!";
      formData.id = uuidv4()
      formData.password = hashPassword(textPassword);
      const user = await createUser(formData);
      const token = jwtToken.createToken(user);

      const mail = new Mailer({
        to: `${user.firstname} <${user.email}>`,
        header: "Confirm your email",
        messageHeader: `Hi, <strong>${user.firstname}!</strong>`,
        messageBody:

          `we have created the account for you </br> your password is ${textPassword} You are can change it at anytime, Click the following Button to confirm your email.`,
        optionLink: `${process.env.APP_URL}/api/${process.env.API_VERSION}/user/confirmation/${token}`,
        browserMessage: `If that doesn't work, copy and paste this link into your browser`,
        Button: true,
      });
      mail.InitButton({
        text: "Confirm Your Email",
        link: `${process.env.FRONTEND_URL}/api/${process.env.API_VERSION}/confirmEmail?email=${user.email}&token=${token} `,
      });
      await mail.sendMail();
    

      return successResponse(res, created, token, signedup, user);
    } catch (e) {
      return next(new Error(e));
    }
  }

  static async createAdminRegistration(req, res, next) {
    try {
      const formData = req.body;
      const textPassword = "admin34@$!9uy ";
      formData.role="admin";
      formData.password = hashPassword(textPassword);
      const user = await createAdmin(formData);
      const token = jwtToken.createToken(user);

      const mail = new Mailer({
        to: `${user.firstname} <${user.email}>`,
        header: "Confirm your email",
        messageHeader: `Hi, <strong>${user.firstname}!</strong>`,
        messageBody:
        `we have created the account for you </br> your password is ${textPassword} You are can change it at anytime, Click the following Button to confirm your email.`,
        optionLink: `${process.env.APP_URL}/api/${process.env.API_VERSION}/user/confirmation/${token}`,
        browserMessage: `If that doesn't work, copy and paste this link into your browser`,
        Button: true,
      });
      mail.InitButton({
        text: "Confirm Your Email",
        link: `${process.env.FRONTEND_URL}/api/${process.env.API_VERSION}/confirmEmail?email=${user.email}&token=${token} `,
      });
      await mail.sendMail();
    

      return successResponse(res, created, token, signedup, user);
    } catch (e) {
      return next(new Error(e));
    }
  }

  /**
   * @description this controller confirm the email
   */
  static async confirmation(req, res, next) {
    try {
      const { token } = req.params;
      const decoded = jwtToken.verifyToken(token);
      const user = await getAdminByIdOrEmail(decoded.email);
      if (user.isVerified) {
        return errorResponse(res, badRequest, thisAccountVerified);
      } else {
        const mail = new Mailer({
          to: `${user.username} <${user.email}>`,
          header: "Thank you for confirmation",
          messageHeader: `Hi, <strong>${user.firstname}!</strong>`,
          messageBody:
            "Thank you for confirming your email,your email confirmed successfully.",
          browserMessage: "",
          Button: "",
          optionLink: "",
        });
        await mail.sendMail();
        const userUpdated = await updateAdmin(decoded);
        // adding thank you message
        const { id, email, isVerified } = userUpdated[1];
        return successResponse(res, ok,undefined,userVerification);
      
      }
    } catch (e) {
      return next(new Error(e));
    }
  }
  /**
   * @description this controller resend confirmation link to the email
   */
  static async resend(req, res, next) {
    try {
      const { email } = req.body;
      const user = await getAdminByIdOrEmail(email);
      if (!user) return errorResponse(res, badRequest, emailAssociate);
      if (user.isVerified)
        return errorResponse(res, badRequest, thisAccountVerified);
      const token = jwtToken.createToken(user);
      const mail = new Mailer({
        to: `${user.username} <${user.email}>`,
        header: "Confirm your email",
        messageHeader: `Hi, <strong>${user.firstname}!</strong>`,
        messageBody:
          "You are requesting to confirm your email, Click the following Button to confirm your email.",
        optionLink: `${process.env.APP_URL}/api/${process.env.API_VERSION}/user/confirmation/${token}`,
        browserMessage: `If that doesn't work, copy and paste this link into your browser`,
        Button: true,
      });
      mail.InitButton({
        text: "Confirm Your Email",
        link: `${process.env.FRONTEND_URL}/api/${process.env.API_VERSION}/confirmEmail?email=${user.email}&token=${token} `,
      });
      await mail.sendMail();

      return successResponse(res, ok, token, resend, user);
    } catch (e) {
      return next(new Error(e));
    }
  }
  static async login(req, res, next) {
    try {
      const { email, password } = req.body;
      const user = await getAdminByIdOrEmail(email);

      if (!user) {
        return errorResponse(res, badRequest, emailOrUsernameNotFound);
      }
      if (user.isVerified === false) {
        return errorResponse(res, badRequest, thisAccountNotVerified);
      }
      if (user.status !== "active") {
        return errorResponse(res, badRequest, accountNotActivated);
      }
      const decryptedPassword = await decryptPassword(password, user.password);
      if (!decryptedPassword) {
        return errorResponse(res, badRequest, emailOrPasswordNotFound);
      }
      const token = jwtToken.createToken(user);
      return successResponse(res, ok, token, loggedin, user);
    } catch (err) {
      return next(new Error(err));
    }
  }
  static async getUserInfo(req, res) {
    const data = await getAdminByIdOrEmail(req.user.id);
    if (data != null) {
      res.status(200).json({message:"my information",data})
    } else {
      errorResponse(res, notFound, res.__("userNotFound"));
    }
  }
}
