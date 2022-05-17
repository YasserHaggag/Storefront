"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var _a = process.env, P_host = _a.P_host, P_Database = _a.P_Database, P_port = _a.P_port, P_Username = _a.P_Username, P_password = _a.P_password, BCRYPT_PASSWORD = _a.BCRYPT_PASSWORD, SALT_ROUNDS = _a.SALT_ROUNDS, TOKEN_SECRET = _a.TOKEN_SECRET, ENV = _a.ENV, Test_Database = _a.Test_Database, Test_username = _a.Test_username;
exports.default = {
    port: P_port,
    host: P_host,
    user: P_Username,
    database: P_Database,
    password: P_password,
    pepper: BCRYPT_PASSWORD,
    salt: SALT_ROUNDS,
    tokensecret: TOKEN_SECRET,
    testDB: Test_Database,
    testuser: Test_username,
    ENV: ENV
};
