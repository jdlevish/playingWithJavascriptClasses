let LinkedList = require("../src/dataStructures/linked-list/linked-list.js");
let ListNode = require("../src/dataStructures/linked-list/linked-list.js")

describe("Linked-List", () => {

    const LL = new LinkedList["default"]();
    LL.push(10);
    LL.push(20);

    test('adds multiple items to list then pop should return true', () => {
        expect(LL.pop()).toBe(true);
    })
})
describe("Linked-List", () => {

    const LL = new LinkedList["default"]();
    LL.push(10);
    LL.push(20);

    test('return length of list after two items added', () => {
        expect(LL.size).toBe(2);
    })
})
describe("Linked-List", () => {

    const LL = new LinkedList["default"]();


    test('pop from empty list should return false', () => {
        expect(LL.pop()).toBe(false);
    })
})