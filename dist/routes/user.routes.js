"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var user_controllers_1 = require("../controllers/user.controllers");
var userRoutes = (0, express_1.Router)();
userRoutes.route('/').get(user_controllers_1.allusers);
userRoutes.get('/:id', user_controllers_1.getuser);
userRoutes.post('/', user_controllers_1.create);
userRoutes.delete('/:id', user_controllers_1.deleteUser);
userRoutes.put('/', user_controllers_1.updateUser);
userRoutes.post('/authenticate', user_controllers_1.authenticate);

exports.default = userRoutes;
