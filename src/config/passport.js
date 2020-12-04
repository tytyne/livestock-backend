import fb from "passport-facebook";
import oauth from "passport-google-oauth20";
import userServices from "../services/user.service";
import helpers from "../utils/helpers.js";
const GoogleStrategy = oauth;
const FacebookStrategy = fb;

const {
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
  FACEBOOK_CLIENT_ID,
  FACEBOOK_CLIENT_SECRET,
} = process.env;

export default (passport) => {
  passport.use(
    new GoogleStrategy(
      {
        clientID:process.env.GOOGLE_CLIENT_ID,
        clientSecret:process.env.GOOGLE_CLIENT_SECRET,
        callbackURL:process.env.CALLBACK_GOOGLE,
      },
      helpers.oauthCallback
    )
  );

  passport.use(
    new FacebookStrategy(
      {
        clientID: process.env.FACEBOOK_CLIENT_ID,
        clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
        callbackURL:process.env.CALLBACK_FACEBOOK,
        profileFields: ["id", "email", "displayName"],
      },
      helpers.oauthCallback
    )
  );

  passport.serializeUser((user, cb) => {
    cb(null, user);
  });

  passport.deserializeUser((user, cb) => {
    cb(null, user);
  });
};