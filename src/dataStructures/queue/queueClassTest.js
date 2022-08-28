var queue = require("./queue")

const Queue = new queue["default"]();

Queue.enQueue("john");
console.log(Queue.queueObj);