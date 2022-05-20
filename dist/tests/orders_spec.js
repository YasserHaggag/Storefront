"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var orders_model_1 = require("../models/orders.model");
var server_1 = __importDefault(require("../server"));
var supertest_1 = __importDefault(require("supertest"));
var request = (0, supertest_1.default)(server_1.default);
var orders_model = new orders_model_1.orders();
var accessToken;
var user;
describe('Test Order Endpoints and Models', function () {
    beforeAll(function () { return __awaiter(void 0, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, request.post('/api/user').send({
                        "name": "Ali",
                        "telephone": 1005464562,
                        "address": "streeeeet 2222",
                        "email": "yasser@gmail.test",
                        "password": "Yasser@Admin123"
                    }).then(function () { return __awaiter(void 0, void 0, void 0, function () {
                        var res;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, request.post("/api/user/authenticate").send({
                                        "email": "yasser@gmail.test",
                                        "password": "Yasser@Admin123"
                                    })];
                                case 1:
                                    res = (_a.sent());
                                    console.log(res.body.data.token);
                                    console.log(res.body.data.user.id, 'User ID ID ID ID ID ID ');
                                    user = res.body.data.user.id;
                                    accessToken = res.body.data.token;
                                    return [2 /*return*/];
                            }
                        });
                    }); })];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    it('should have index method', function () {
        expect(orders_model.getall).toBeDefined();
    });
    it('index method should return a list of orders', function () { return __awaiter(void 0, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, orders_model.getall()];
                case 1:
                    result = _a.sent();
                    expect(result).not.toBeNull();
                    return [2 /*return*/];
            }
        });
    }); });
    it('Create new Order Defined', function () {
        expect(orders_model.create).toBeDefined();
    });
    it('create new order API ', function () { return __awaiter(void 0, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, request.post('/api/order').set("Authorization", "Bearer " + accessToken).send({
                        "user_id": user,
                        "comments": "User comments in that area"
                    })];
                case 1:
                    response = _a.sent();
                    expect(response.body.status).toEqual('success');
                    return [2 /*return*/];
            }
        });
    }); });
});
