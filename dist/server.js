"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var users_model_1 = require("./models/users.model");
var routes_1 = __importDefault(require("./routes"));
var error_middleware_1 = __importDefault(require("./middlewares/error.middleware"));
var user = new users_model_1.users();
var app = (0, express_1.default)();
var port = 3000;
app.use(express_1.default.json());
app.use('/api', routes_1.default);
app.listen(port, function () {
    console.log("Server started at localhost: ".concat(port));
});
//app.use(morgan('common'))
app.use(error_middleware_1.default);
exports.default = app;
