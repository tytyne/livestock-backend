import express from "express";
import userController from "../../controllers/user.controller.js";
import{validateSignup} from "../../middlewares/validatorMiddleware.js"
import { checkEmailExist,checkUsernameExist } from "../../middlewares/auth.js";
import resetController from "../../controllers/reset.controller"
import{validatePassword,validateEmail} from "../../middlewares/validatorMiddleware"
import Uservalidation from "../../validation/user.validator"

const router = express.Router();

router.get("/user", (req, res) => {
  res.status(200).json({ message: "successfully sent" });
});

router.put("/user", (req, res) => {
  res.status(200).json({ message: "successfully sent" });
});

router.post("/user/signup",Uservalidation.save,[checkEmailExist,checkUsernameExist],userController.signup);
router.post("/user/resend",userController.resend)
router.get("/user/confirmation/:token",userController.confirmation);
router.post("/user/login",userController.login)

router.post("/auth/forgot_password",validateEmail,resetController.forgetPassword)
router.post("/auth/reset_password/:token",validatePassword,resetController.resetPassword)

export default router;
