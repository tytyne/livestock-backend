import UserService from "../services/user.service.js";
import { jwtToken } from "../utils/jwt.utils";
import customMessage from "../utils/customMessage.js";
import helper from "../utils/helpers.js";
import responses from "../utils/responses.js";
import statusCode from "../utils/statusCode.js";
import Mailer from "../utils/mail/email.js";

const { updatePassword,getUserByIdOrEmail,getUserByEmail } = UserService;
const { hashPassword } = helper;
const { noEmailAssociate, passwordReset, passwordMatch, passwordUpdated } =
  customMessage;
const { ok, notFound, badRequest } = statusCode;
const { successResponse, errorResponse } = responses;

/**
 * @class resetController
 * @classdesc deals with forget and reset password
 */

class resetController {
  /**
   * @description send reset link
   * @param {object} req  request
   * @param {object} res response
   * @param {object} next for jumping to error
   * @return error json object with notFound message
   * @return return json object with passwordReset message
   */

  static async forgetPassword(req, res, next) {
    try {
      const { email } = req.body;
      const user = await getUserByIdOrEmail(email);
      if (!user) return errorResponse(res, notFound, noEmailAssociate);
      const token = jwtToken.createToken(user);
      const mail = new Mailer({
        to: `${user.username} <${user.email}>`,
        header: "Forget password",
        messageHeader: `Hi, <strong>${user.fullname}!</strong>`,
        messageBody:
          "You are requesting to reset your password, Click the following Button to reset your password.",
        optionLink: `${process.env.APP_URL}/api/${process.env.API_VERSION}/owner/reset_password/${token}`,
        browserMessage: `If that doesn't work, copy and paste this link into your browser`,
        Button: true,
      });
      mail.InitButton({
        text: "Reset password",
        link: `${process.env.FRONTEND_URL}/api/${process.env.API_VERSION}/owner/resetPassword?email=${user.email}&token=${token} `,
      });
      await mail.sendMail();
      return successResponse(res, ok, token, passwordReset, user);
    } catch (e) {
      return next(new Error(e));
    }
  }
  /**
   * @description reset password
   * @param {object} req request
   * @param {*} res  response
   * @param {*} next checking error
   * @return passwordMatch error
   *
   */
  static async resetPassword(req, res, next) {
     try {
      const { password, confirmPassword } = req.body;
      if (password !== confirmPassword)
        return errorResponse(res, badRequest, passwordMatch);
      const { token } = req.params;
      const decoded = jwtToken.verifyToken(token);
      const user = await getUserByEmail(decoded.email);
      console.log("check a usserrr",user)
      console.log("check a email",user.email)
      const mail = new Mailer({
        to: `${user.username} <${user.email}>`,
        header: "Reset Password",
        messageHeader: `Hi, <strong>${user.fullname}!</strong>`,
        messageBody:
          "Thank you for Resetting your password,your password has been reset successfully.",
        browserMessage: "",
        Button: "",
        optionLink: "",
      });

      await mail.sendMail();
      const hash = hashPassword(password);
      const updatedUser = await updatePassword(hash, decoded);
      console.log(updatedUser);
      return successResponse(res, ok, undefined, passwordUpdated);
    } catch (e) {
      return next(new Error(e));
    }
  }
}

export default resetController;
