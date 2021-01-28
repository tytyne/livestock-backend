import UserService from "../services/user.service.js";
import{jwtToken} from "../utils/jwt.utils"
import customMessage from "../utils/customMessage.js";
import helper from "../utils/helpers.js";
import responses from "../utils/responses.js";
import statusCode from "../utils/statusCode.js";
import email from "../utils/email.js";

const {updatePassword,getUserByEmail} = UserService;
const { hashPassword } = helper;
const {noEmailAssociate,passwordReset,passwordMatch,passwordUpdated} = customMessage;
const {ok,notFound,badRequest} = statusCode;
const { successResponse,errorResponse} = responses;
const { sendResetEmail,resetConfirmation} = email;



/**
 * @class resetController
 * @classdesc deals with forget and reset password
 */


class resetController{
    /**
     * @description send reset link 
     * @param {object} req  request
     * @param {object} res response
     * @param {object} next for jumping to error
     * @return error json object with notFound message
     * @return return json object with passwordReset message
     */

    static async forgetPassword(req,res,next){
        try{

            const{email}=req.body
            const user= await getUserByEmail(email)
            if(!user) return errorResponse(res,notFound,noEmailAssociate);
            const token = jwtToken.createToken(user)
            await sendResetEmail(user,token)
            return successResponse(res,ok,token,passwordReset,user);
        }
        catch(e){
            return next(new Error(e))
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
    static async resetPassword(req,res,next){

        try{
            const {password,confirmPassword} = req.body;
              if (password !== confirmPassword) return errorResponse(res,badRequest,passwordMatch);
            const { token } = req.params;
            const decoded = jwtToken.verifyToken(token);
            const user= await getUserByEmail(decoded.email)
            await resetConfirmation(user)
            const hash = hashPassword(password);
            const updatedUser= await updatePassword(hash,decoded)
            console.log(updatedUser)
            return successResponse(res,ok,undefined,passwordUpdated);
        }
        catch(e){
            return next(new Error(e))
        }

        }
}

export default resetController