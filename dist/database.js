"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var pg_1 = require("pg");
var config_1 = __importDefault(require("./config"));
var DBclient;
if (config_1.default.ENV === 'dev') {
    DBclient = new pg_1.Pool({
        host: config_1.default.host,
        database: config_1.default.database,
        port: Number(config_1.default.port),
        user: config_1.default.user,
        password: config_1.default.password,
    });
}
if (config_1.default.ENV === 'test') {
    DBclient = new pg_1.Pool({
        host: config_1.default.host,
        database: config_1.default.testDB,
        port: Number(config_1.default.port),
        user: config_1.default.testuser,
        password: config_1.default.password,
    });
}
console.log(process.env.P_password);
exports.default = DBclient;
