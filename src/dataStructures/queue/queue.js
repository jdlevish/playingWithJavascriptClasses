"use strict";
exports.__esModule = true;
var Queue = /** @class */ (function () {
    function Queue() {
        var _this = this;
        this.enQueue = function (item) {
            _this.queueObj[_this.tail] = item;
            _this.tail++;
            return _this.queueObj;
        };
        this.deQueue = function () {
            var size = _this.tail - _this.head;
            if (size <= 0)
                return console.log("Queue deQueue failed as Queue is empty");
            delete _this.queueObj[_this.head];
            if (_this.head === _this.tail) {
                _this.head = 0;
                _this.head = 0;
            }
            return _this.queueObj;
        };
        this.queueObj = {};
        this.head = 0;
        this.tail = 0;
    }
    return Queue;
}());
exports["default"] = Queue;
