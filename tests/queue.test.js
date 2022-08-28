var queue = require('../src/dataStructures/queue/queue.js')


describe("queue", () => {

    const Queue = new queue["default"]();
    Queue.enQueue("joe")

    test('adds item to queue', () => {
        expect(Queue.queueObj[0]).toBe("joe");
    })
})

describe("queue", () => {

    const Queue = new queue["default"]();
    Queue.enQueue("joe")
    Queue.enQueue("john")
    Queue.enQueue("james")

    test('adds multiple items to queue', () => {
        expect(Queue.queueObj[2]).toBe("james");
    })
})
describe("queue", () => {

    const Queue = new queue["default"]();
    Queue.enQueue("joe")
    Queue.enQueue("john")
    Queue.enQueue("james")

    Queue.deQueue();
    test('removes item from the queue', () => {
        expect(Queue.queueObj[0]).toBe(undefined);
    })
})