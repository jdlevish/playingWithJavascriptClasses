"use strict";
exports.__esModule = true;
var Stack = /** @class */ (function () {
    function Stack(data, top) {
        var _this = this;
        this.push = function (data) {
            _this.top++;
            _this.data[_this.top] = data;
            return _this.data;
        };
        this.pop = function () {
            if (_this.top < 0)
                return undefined;
            var poppedTop = _this.data[_this.top];
            _this.top--;
            return poppedTop;
        };
        this.data = [data];
        this.top = -1;
    }
    return Stack;
}());
exports["default"] = Stack;
