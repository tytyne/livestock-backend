import express from "express";
import userController from "../../controllers/user.controller.js";
import adminController from "../../controllers/admin.controller.js"
import{validateSignup} from "../../middlewares/validatorMiddleware.js"
import { checkEmailExist,checkUsernameExist } from "../../middlewares/auth.js";
import resetController from "../../controllers/reset.controller"
import{validatePassword,validateEmail} from "../../middlewares/validatorMiddleware"
import Uservalidation from "../../validation/user.validator"
import checkAuthorisation from "../../middlewares/authentication"

const router = express.Router();


router.post("/user/login",adminController.login)



export default router;