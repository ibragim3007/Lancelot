"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var node_http_1 = require("node:http");
var socket_io_1 = require("socket.io");
var MockDatabase_1 = __importDefault(require("../database/MockDatabase"));
var context_1 = require("./context/context");
var PORT = 3000;
var app = (0, express_1.default)();
var server = (0, node_http_1.createServer)(app);
var io = new socket_io_1.Server(server);
app.get('/', function (req, res) {
    res.send('OK');
});
app.get('/get-all-messages', function (req, res) {
    // Room.getAllMessages(req, res, context);
    try {
        var result = MockDatabase_1.default.messages.findAll();
        res.send(result);
    }
    catch (e) {
        console.log(e);
    }
});
app.get('/get-all-users', function (req, res) {
    var result = MockDatabase_1.default.users.findAll();
    res.send(result);
});
var onConnection = function (socket, context) {
    socket.on('connection', function (user) {
        var newUser = MockDatabase_1.default.users.create(user);
        var message = MockDatabase_1.default.messages.create({
            id: String(new Date().getMilliseconds),
            createAt: new Date(),
            text: "\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C ".concat(user.name, " \u043F\u0440\u0438\u0441\u043E\u0435\u0434\u0435\u043D\u0438\u043B\u0441\u044F \u043A \u0447\u0430\u0442\u0443"),
            type: 'new-user',
            user: user,
        });
        io.emit('connection', newUser, message);
    });
    socket.on("disconnect", function (reason) {
        console.log(reason);
    });
    socket.on("user-leave", function (msg) {
        MockDatabase_1.default.users.remove(msg.id);
        var message = MockDatabase_1.default.messages.create({
            id: String(new Date().getMilliseconds),
            createAt: new Date(),
            text: "\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C ".concat(msg.name, " \u043F\u043E\u043A\u0438\u043D\u0443\u043B \u0447\u0430\u0442"),
            type: 'exit-user',
            user: msg,
        });
        io.emit('user-leave', msg, message);
    });
    socket.on('message', function (msg) {
        // Room.addMessage(null, msg, context);
        context.db.messages.create(msg);
        io.emit('message', msg);
    });
};
io.on('connection', function (socket) { return onConnection(socket, context_1.context); });
server.listen(PORT, function () {
    console.log("server running at http://localhost:".concat(PORT));
});
//# sourceMappingURL=server.js.map