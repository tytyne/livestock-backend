import express from "express";
import userController from "../../controllers/user.controller.js";
import authMiddleware from "../../middlewares/auth.js";
import{validateSignup} from "../../middlewares/validatorMiddleware.js"
import passport from "passport";
const { checkEmailExist,checkUsernameExist } = authMiddleware;
import AuthControllers from "../../controllers/socialMediaController.js";

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

router.get(
  "/user/login/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
  "/user/login/google/redirect/",
  passport.authenticate("google", {
    failureRedirect: "/",
  }),
  AuthControllers.loginCallback
);

router.get(
  "/user/login/facebook",
  passport.authenticate("facebook", {
    scope: ["email"],
  })
);

router.get(
  "/user/login/facebook/redirect/",
  passport.authenticate("facebook", {
    failureRedirect: "/",
  }),
  AuthControllers.loginCallback
);

router.get("/user/logout", (req, res, next) => {
  req.logout();
  res.redirect("/api");
});

export default router;
