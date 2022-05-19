"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var authentication_middleware_1 = __importDefault(require("../middlewares/authentication.middleware"));
var orders_routes_1 = __importDefault(require("./orders.routes"));
var orders_products_routes_1 = __importDefault(require("./orders_products.routes"));
var products_routes_1 = __importDefault(require("./products.routes"));
var user_routes_1 = __importDefault(require("./user.routes"));
var routes = (0, express_1.Router)();
routes.use('/user', user_routes_1.default);
//routes.use('/products',)
routes.use('/product', products_routes_1.default, authentication_middleware_1.default);
routes.use('/order', orders_routes_1.default);
routes.use('/order_products', orders_products_routes_1.default);
exports.default = routes;
