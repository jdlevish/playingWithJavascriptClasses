"use strict";
exports.__esModule = true;
var readme_1 = require("./readme");
var inquirer_1 = require("inquirer");
var userInput = inquirer_1["default"].prompt([]).then(function (answers) { });
var readme = new readme_1["default"]("hello", "hello", "hello", "hello", "hello", "hello", "hello", "hello", "hello", "hello", "hello", "hello", "hello", "hello");
console.log(readme);
