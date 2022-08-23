"use strict";
// creat a readme file for projects using typscript and class syntax
exports.__esModule = true;
var fs = require("fs");
var util = require("util");
var writeFileAsync = util.promisify(fs.writeFile);
var Readme = /** @class */ (function () {
    function Readme(Title, Description, Installation, Requirements, Usage, Tests, Contributions, GithubUserName, Email, License, ScreenShot) {
        var _this = this;
        // method that writes the markdown file from the user input
        this.generateReademeMD = function () {
            return "\n        ![](".concat(_this.ScreenShot, ")\n        # ").concat(_this.Title, "\n        \n        ## ![](https://img.shields.io/github/license/").concat(_this.GithubUserName, "/").concat(_this.Title, "/)\n        \n        ## Table Of Contents\n        \n        *[Description](#Description)\n        \n        *[installation](#Installation)\n        \n        *[requirements](#requirements)\n        \n        *[Usage Instructions](#Usage-Instructions)\n        \n        *[Running the tests](#Running-the-tests)\n        \n        *[Contributing](#Contributing)\n        ## Description\n        ").concat(_this.Description, "\n            \n        ## Installation\n            \n        ").concat(_this.Installation, "\n            \n        ## Requirements\n            \n        ").concat(_this.Requirements, "\n        ## Usage Instructions\n        \n        ").concat(_this.Usage, "\n            \n        ## Running the tests\n            \n        ").concat(_this.Tests, "\n            \n        ## Contributing\n            \n        ").concat(_this.Contributions, "\n        \n        ## Additional questions\n        contact the creator at ").concat(_this.Email, " or ").concat(_this.GithubUserName, " on github.com\n        \n        ## licensing\n        this project is covered under the ").concat(_this.License, " for more info view the  [license.txt](/license.txt)\n            ");
        };
        this.returnReadme = function () {
            var readMeObject = {
                Title: _this.Title,
                Description: _this.Description,
                Installation: _this.Installation,
                Requirements: _this.Requirements,
                Usage: _this.Usage,
                Tests: _this.Tests,
                Contributions: _this.Contributions,
                GithubUserName: _this.GithubUserName,
                Email: _this.Email,
                License: _this.License,
                ScreenShot: _this.ScreenShot
            };
            console.log(readMeObject);
            return readMeObject;
        };
        this.writeReadmeToFile = function () {
            var markDownFile = _this.generateReademeMD();
            return writeFileAsync("readme.md", markDownFile);
        };
        this.Title = Title;
        this.Description = Description;
        this.Installation = Installation;
        this.Requirements = Requirements;
        this.Usage = Usage;
        this.Tests = Tests;
        this.Contributions = Contributions;
        this.GithubUserName = GithubUserName;
        this.Email = Email;
        this.License = License;
        this.ScreenShot = ScreenShot;
    }
    return Readme;
}());
exports["default"] = Readme;
