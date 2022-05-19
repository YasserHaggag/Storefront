"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var users_model_1 = require("./models/users.model");
var routes_1 = __importDefault(require("./routes"));
var error_middleware_1 = __importDefault(require("./middlewares/error.middleware"));
var authentication_middleware_1 = __importDefault(require("./middlewares/authentication.middleware"));
var morgan_1 = __importDefault(require("morgan"));
var user = new users_model_1.users();
var app = (0, express_1.default)();
var port = 3000;
//app.use(validateTokenMiddleware)
app.use(express_1.default.json(), authentication_middleware_1.default);
app.use('/api', routes_1.default);
/* app.get('/api',  async function(req:Request,res:Response)
{//res.send('hello');
    const resu=  await user.getall();
    
    res.send(resu)
    
}); */
app.listen(port, function () {
    console.log("Server started at localhost: ".concat(port));
});
app.use((0, morgan_1.default)('common'));
//app.use(validateTokenMiddleware)
app.use(error_middleware_1.default);
exports.default = app;
