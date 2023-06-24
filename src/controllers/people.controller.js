import UserService from "../services/user.service.js";
import customMessage from "../utils/customMessage.js";
import errorMessage from "../utils/errorMessage";
import helper from "../utils/helpers";
import Mailer from "../utils/mail/email.js";
import responses from "../utils/responses.js";
import statusCode from "../utils/statusCode.js";
import { jwtToken } from "../utils/jwt.utils.js";
const { hashPassword, decryptPassword } = helper;
const { v4: uuidv4 } = require('uuid');

const { createUser, getUserByIdOrEmail, updateUser ,gettingUsersPerFarm,gettingUser,deletingUser} = UserService;
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
  accountNotActivated,
} = errorMessage;
const { created, ok, badRequest } = statusCode;
const { successResponse, errorResponse } = responses;

/**
 * @description this controller deals with user signup
 */
export default class PeopleControllers {
  /**
   * @description this controller saves/signup a user in database
   * @param {object} req request
   * @param {object} res response
   * * @param {object} next jump to error
   * @return {object} return json object with signup message
   */
  static async signup(req, res, next) {
    try {

    const{farmId}=req.params;
      const formData = req.body;
      formData.id = uuidv4()
      formData.assignedTo = farmId;
      const textPassword = formData.password;
      formData.password = hashPassword(textPassword);
      formData.isVerified=true;
      //check if email exist

      const user = await createUser(formData);
      const token = jwtToken.createToken(user);

      // const mail = new Mailer({
      //   to: `${user.username} <${user.email}>`,
      //   header: "Confirm your email",
      //   messageHeader: `Hi, <strong>${user.firstname}!</strong>`,
      //   messageBody:
      //     "You are requesting to confirm your email, Click the following Button to confirm your email.",
      //   optionLink: `${process.env.APP_URL}/api/${process.env.API_VERSION}/user/confirmation/${token}`,
      //   browserMessage: `If that doesn't work, copy and paste this link into your browser`,
      //   Button: true,
      // });
      // mail.InitButton({
      //   text: "Confirm Your Email",
      //   link: `${process.env.FRONTEND_URL}/api/${process.env.API_VERSION}/confirmEmail?email=${user.email}&token=${token} `,
      // });
      // await mail.sendMail();

      return successResponse(res, created, token, signedup, user);
    } catch (e) {
      return next(new Error(e));
    }
  }

//get all people
static async getAllPeople(req,res,next){
  try{
    const {farmId} = req.params
    const data = await gettingUsersPerFarm(farmId);
    return res.status(200).json({message:"all people",data})
    
  }
  catch (e) {
      return next(new Error(e));
    }
}

static async getOnePerson(req,res,next){
  try{
    const {farmId,id} = req.params
    const data = await gettingUser(id);
    return res.status(200).json({message:"all people",data})
    
  }
  catch (e) {
      return next(new Error(e));
    }
}

static async deletingOnePerson(req,res,next){
  try{
    const {farmId,id} = req.params
      await deletingUser(id);
    return res.status(200).json({message:"user deleted!"})
    
  }
  catch (e) {
      return next(new Error(e));
    }
}




}

