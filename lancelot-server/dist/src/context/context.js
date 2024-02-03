"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.context = void 0;
var client_1 = require("@prisma/client");
var MockDatabase_1 = __importDefault(require("../../database/MockDatabase"));
var prisma = new client_1.PrismaClient();
exports.context = {
    prisma: prisma,
    db: MockDatabase_1.default,
};
//# sourceMappingURL=context.js.map