var Stack = require('./stack')
const testStack = new Stack["default"]();

// let testStack = new Stack()

testStack.push(5)
console.log(testStack)
testStack.push(10)
console.log(testStack.data)
console.log(testStack.pop())