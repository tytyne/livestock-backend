import express from "express";
import bodyparser from "body-parser";
import methodoverride from "method-override";
import cors from "cors";
import morgan from "morgan"
import path from "path";
import swaggerUi from "swagger-ui-express";
import routes from "./routes/index.js";
import i18n from "./utils/i18n.js";
import swaggerDocs from "../docs/index.js"
import dotenv from "dotenv";
dotenv.config();

//global ...
const app = express()


dotenv.config();

const __dirname = path.resolve();


app.use(bodyparser.json());
app.use(cors());
app.use(morgan("dev"));
app.use(bodyparser.urlencoded({ extended: false }));
app.use(methodoverride());
app.use(express.static(`${__dirname}/public`));
app.use(i18n.init);

app.get("/home", (req, res, next) => res.status(200).json({
  message: res.__("welcome"),
}));


app.use(routes);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
// app.use(routes);

// finally, let's start our server...
const port = process.env.PORT || 5000;
const server = app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
export default server;
