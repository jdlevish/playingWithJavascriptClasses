"use strict";
exports.__esModule = true;
var readmeClass_1 = require("./readmeClass");
// import userInput from "./userinput";
var inquirer = require("inquirer");
var fs = require("fs");
var util = require("util");
var writeFileAsync = util.promisify(fs.writeFile);
function userInput() {
    return inquirer.prompt([
        {
            type: "input",
            name: "Title",
            message: "enter the title of your project"
        },
        {
            type: "input",
            name: "Description",
            message: "enter a description of your project"
        },
        {
            type: "input",
            name: "Installation",
            message: "enter the installation process for your project"
        },
        {
            type: "input",
            name: "Usage",
            message: "enter the usage of your project"
        },
        {
            type: "list",
            name: "License",
            message: "select the license of your project.",
            choices: ["MIT", "Apache", "GPL", "BSD", "GNU GENERAL PUBLIC LICENSE", "None"]
        },
        {
            type: "input",
            name: "Contributing",
            message: "enter the  process for contributing to your project"
        },
        {
            type: "input",
            name: "Tests",
            message: "enter the process for running the tests associated with your project"
        },
        {
            type: "input",
            name: "Requirements",
            message: "enter the requirements for running your project"
        },
        {
            type: "input",
            name: "Contributions",
            message: "enter the user names for significant contributors to this project."
        },
        {
            type: "input",
            name: "GithubUserName",
            message: "enter your github username"
        },
        {
            type: "input",
            name: "Email",
            message: "enter your email"
        },
        {
            type: "input",
            name: "ScreenShot",
            message: "enter the url of a screenshot of your project"
        }
    ]);
}
userInput().then(function (answers) {
    var readme = new readmeClass_1["default"](answers.Title, answers.Description, answers.Installation, answers.Requirements, answers.Usage, answers.Tests, answers.Contributions, answers.GithubUserName, answers.Email, answers.License, answers.ScreenShot);
    readme.writeReadmeToFile();
})["catch"](function (err) {
    console.log(err);
});
