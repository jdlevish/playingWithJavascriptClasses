// creat a readme file for projects using typscript and class syntax
const inquirer = require("inquirer");
const fs = require("fs");


interface readme {
    Title: string;
    Description: string;
    TableOfContents: string;
    Installation: string;
    Usage: string;
    License: string;
    Contributing: string;
    Tests: string;
    Requirements: string;
    Contributions: string;
    GithubUserName: string;
    Email: string;
    ScreenShot: string;
}

class readme {
    constructor(Title: string, Description: string, TableOfContents: string, Installation: string, Requirements: string, Usage: string, Tests: string, Contributions: string, GithubUserName: string, Email: string, License: string, ScreenShot: string) {
        this.Title = Title;
        this.Description = Description;
        this.TableOfContents = TableOfContents;
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



}
