"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var user_controllers_1 = require("../controllers/user.controllers");
var authentication_middleware_1 = __importDefault(require("../middlewares/authentication.middleware"));
var userRoutes = (0, express_1.Router)();
userRoutes.route('/').get(authentication_middleware_1.default, user_controllers_1.allusers);
userRoutes.get('/:id', authentication_middleware_1.default, user_controllers_1.getuser);
userRoutes.post('/', user_controllers_1.create);
userRoutes.delete('/:id', authentication_middleware_1.default, user_controllers_1.deleteUser);
userRoutes.put('/', authentication_middleware_1.default, user_controllers_1.updateUser);
userRoutes.post('/authenticate', user_controllers_1.authenticate);
/* userRoutes.post('/', (req: Request, res: Response) => {
    const article: users = {
      name: req.body.name,
      content: req.body.content
    }
    try {
       res.send('this is the CREATE route')
    } catch (err) {
       res.status(400)
       res.json(err)
    }
}) */
/* userRoutes.put('/users/:id', (req: Request, res: Response) => {
 const article: Article = {
      id: req.params.id,
      title: req.body.title,
      content: req.body.content
    }
    try {
       res.send('this is the EDIT route')
    } catch (err) {
       res.status(400)
       res.json(err)
    }
}) */
/* userRoutes.delete('/articles/:id', (_req: Request, res: Response) => {
    try {
       res.send('this is the DELETE route')
    } catch (err) {
       res.status(400)
       res.json(err)
    }
}

) */
exports.default = userRoutes;
