"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MockDatabase = /** @class */ (function () {
    function MockDatabase(data) {
        this.data = [];
        if (!Array.isArray(data))
            return;
        this.data = data;
    }
    MockDatabase.prototype.findAll = function () {
        return this.data;
    };
    MockDatabase.prototype.find = function (id) {
        return this.data.find(function (item) { return item.id === id; });
    };
    MockDatabase.prototype.create = function (object) {
        console.log(object);
        this.data.push(object);
        return object;
    };
    MockDatabase.prototype.remove = function (id) {
        if (this.data && this.data.length !== 0) {
            this.data = this.data.filter(function (item) { return item.id !== id; });
        }
    };
    MockDatabase.prototype.update = function (id, data) {
        var index = this.data.findIndex(function (item) { return item.id === id; });
        if (index === -1)
            throw new Error('not found');
        this.data[index] = data;
    };
    return MockDatabase;
}());
var DataBase = /** @class */ (function () {
    function DataBase() {
        this.messages = new MockDatabase();
        this.users = new MockDatabase();
    }
    return DataBase;
}());
var db = new DataBase();
exports.default = db;
//# sourceMappingURL=MockDatabase.js.map