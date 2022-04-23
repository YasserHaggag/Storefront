"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var pg_1 = require("pg");
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var _a = process.env, P_host = _a.P_host, P_Database = _a.P_Database, P_port = _a.P_port, P_Username = _a.P_Username, P_password = _a.P_password;
var DBclient = new pg_1.Pool({
    host: P_host,
    database: P_Database,
    port: Number(P_port),
    user: P_Username,
    password: P_password,
});
console.log(P_password);
console.log(process.env.P_password);
exports.default = DBclient;
