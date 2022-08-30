let LinkedList = require("../src/dataStructures/linked-list/linked-list.js");
let ListNode = require("../src/dataStructures/linked-list/linked-list.js")

describe("Linked-List", () => {

    const LL = new LinkedList();
    LL.push(10);
    LL.push(20);

    test('adds multiple items to queue', () => {
        expect(LL.pop()).toBe(true);
    })
})