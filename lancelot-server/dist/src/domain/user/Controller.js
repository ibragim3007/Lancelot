"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Model_1 = __importDefault(require("./Model"));
var User = Model_1.default;
exports.default = {
    addUser: function (req, res, context) { return User.addUser(req, res, context); },
    getAllUsers: function (req, res, context) { return User.getAllUsers(req, res, context); },
};
//# sourceMappingURL=Controller.js.map