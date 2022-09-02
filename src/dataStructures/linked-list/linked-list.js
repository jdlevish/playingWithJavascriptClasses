"use strict";
exports.__esModule = true;
exports.ListNode = exports.LinkedList = void 0;
var ListNode = /** @class */ (function () {
    function ListNode(data) {
        this.data = data;
        this.next = null;
    }
    return ListNode;
}());
exports.ListNode = ListNode;
var LinkedList = /** @class */ (function () {
    function LinkedList(head) {
        if (head === void 0) { head = null; }
        var _this = this;
        this.push = function (value) {
            _this.size = _this.size + 1;
            var newNode = new ListNode(value);
            if (!_this.head) {
                _this.head = newNode;
            }
        };
        this.pop = function () {
            if (!_this.head) {
                return false;
            }
            if (_this.size === 1) {
                _this.head = null;
                _this.size--;
                return true;
            }
            var current = _this.head;
            var prevNode = null;
            while (current.next) {
                prevNode = current;
                current = current.next;
            }
            // prevNode.next = null;
            _this.size--;
            return true;
        };
        this.head = head;
        this.size = 0;
        this.next = null;
    }
    return LinkedList;
}());
exports["default"] = LinkedList;
