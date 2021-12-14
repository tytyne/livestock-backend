import express from "express";
import bodyparser from "body-parser";
import methodoverride from "method-override";
import cors from "cors";
import morgan from "morgan"
import path from "path";
import swaggerUi from "swagger-ui-express";
import swaggerDoc from "../swagger.json";
import routes from "./routes/index.js";
import i18n from "./utils/i18n";
import passport from "passport";
import dotenv from "dotenv";
// import passportFunc from "./config/passport.js";
dotenv.config();
// passportFunc(passport);
//global ...
const app = express()
app.use(cors())

dotenv.config();

const __dirname = path.resolve();

// Initialize passport
// app.use(passport.initialize());
// app.use(passport.session());
app.use(bodyparser.json());
app.use(cors());
app.use(morgan("dev"));
app.use(bodyparser.urlencoded({ extended: false }));
app.use(methodoverride());
app.use(express.static(`${__dirname}/public`));
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDoc));
app.use(i18n.init);

app.get("/home", (req, res, next) => res.status(200).json({
  message: res.__("welcome"),
}));
// Initialize passport
app.use(passport.initialize());
app.use(passport.session());
app.use(routes);

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDoc));
app.use(routes);

// finally, let's start our server...
const port = process.env.PORT || 5000;
const server = app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
export default server;
