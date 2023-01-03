"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _bodyParser = _interopRequireDefault(require("body-parser"));
var _methodOverride = _interopRequireDefault(require("method-override"));
var _cors = _interopRequireDefault(require("cors"));
var _morgan = _interopRequireDefault(require("morgan"));
var _path = _interopRequireDefault(require("path"));
var _swaggerUiExpress = _interopRequireDefault(require("swagger-ui-express"));
var _index = _interopRequireDefault(require("./routes/index.js"));
var _i18n = _interopRequireDefault(require("./utils/i18n"));
var _docs = _interopRequireDefault(require("../docs"));
var _dotenv = _interopRequireDefault(require("dotenv"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
_dotenv["default"].config();

//global ...
var app = (0, _express["default"])();
app.use((0, _cors["default"])());
_dotenv["default"].config();
var _dirname = _path["default"].resolve();
app.use(_bodyParser["default"].json());
app.use((0, _cors["default"])());
app.use((0, _morgan["default"])("dev"));
app.use(_bodyParser["default"].urlencoded({
  extended: false
}));
app.use((0, _methodOverride["default"])());
app.use(_express["default"]["static"]("".concat(_dirname, "/public")));
app.use(_i18n["default"].init);
app.get("/home", function (req, res, next) {
  return res.status(200).json({
    message: res.__("welcome")
  });
});
app.use(_index["default"]);
app.use("/api-docs", _swaggerUiExpress["default"].serve, _swaggerUiExpress["default"].setup(_docs["default"]));
// app.use(routes);

// finally, let's start our server...
var port = process.env.PORT || 5000;
var server = app.listen(port, function () {
  console.log("Listening on port ".concat(port));
});
var _default = server;
exports["default"] = _default;