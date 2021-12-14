import express from "express";
import userController from "../../controllers/user.controller.js";
import authMiddleware from "../../middlewares/auth.js";
import{validateSignup} from "../../middlewares/validatorMiddleware.js"
import passport from "passport";
const { checkEmailExist,checkUsernameExist } = authMiddleware;
// import AuthControllers from "../../controllers/socialMediaController.js";
import resetController from "../../controllers/reset.controller"
import{validatePassword,validateEmail} from "../../middlewares//validatorMiddleware"

const router = express.Router();

router.get("/user", (req, res) => {
  res.status(200).json({ message: "successfully sent" });
});

router.put("/user", (req, res) => {
  res.status(200).json({ message: "successfully sent" });
});

router.post("/user/signup",validateSignup,[checkEmailExist,checkUsernameExist],userController.signup);
router.post("/user/resend",userController.resend)
router.post("/user/confirmation/:token",userController.confirmation);
router.post("/login",userController.login)

router.post("/auth/forgot_password",validateEmail,resetController.forgetPassword)
router.post("/auth/reset_password/:token",validatePassword,resetController.resetPassword)

export default router;
