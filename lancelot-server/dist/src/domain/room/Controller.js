"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Model_1 = __importDefault(require("./Model"));
var Room = Model_1.default;
exports.default = {
    getAllMessages: function (req, res, context) { return Room.getAllMessages(req, res, context); },
    addMessage: function (_req, _res, context) { return Room.addMessage(_req, _res, context); },
};
//# sourceMappingURL=Controller.js.map