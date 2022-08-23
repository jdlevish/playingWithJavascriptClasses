// creat a readme file for projects using typscript and class syntax

const fs = require("fs");
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);






export default class Readme {
    Title: string;
    Description: string;
    TableOfContents: string;
    Installation: string;
    Requirements: string;
    Usage: string;
    Tests: string;
    Contributions: string;
    GithubUserName: string;
    Email: string;
    License: string;
    ScreenShot: string;
    answerObject: object;
    constructor(Title, Description, TableOfContents, Installation, Requirements, Usage, Tests, Contributions, GithubUserName, Email, License, ScreenShot) {
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
    // method that writes the markdown file from the user input



    generateReademeMD: Function = () => {

        return `
        ![](${this.ScreenShot})
        # ${this.Title}
        
        ## ![](https://img.shields.io/github/license/${this.GithubUserName}/${this.Title}/)
        
        ## Table Of Contents
        
        *[Description](#Description)
        
        *[installation](#Installation)
        
        *[requirements](#requirements)
        
        *[Usage Instructions](#Usage-Instructions)
        
        *[Running the tests](#Running-the-tests)
        
        *[Contributing](#Contributing)
        ## Description
        ${this.Description}
            
        ## Installation
            
        ${this.Installation}
            
        ## Requirements
            
        ${this.Requirements}
        ## Usage Instructions
        
        ${this.Usage}
            
        ## Running the tests
            
        ${this.Tests}
            
        ## Contributing
            
        ${this.Contributions}
        
        ## Additional questions
        contact the creator at ${this.Email} or ${this.GithubUserName} on github.com
        
        ## licensing
        this project is covered under the ${this.License} for more info view the  [license.txt](/license.txt)
            `
            ;
    }
    returnReadme = () => {
        const readMeObject = {
            Title: this.Title,
            Description: this.Description,
            TableOfContents: this.TableOfContents,
            Installation: this.Installation,
            Requirements: this.Requirements,
            Usage: this.Usage,
            Tests: this.Tests,
            Contributions: this.Contributions,
            GithubUserName: this.GithubUserName,
            Email: this.Email,
            License: this.License,
            ScreenShot: this.ScreenShot
        }
        console.log(readMeObject);
        return readMeObject;


    }
    writeReadmeToFile = () => {
        const markDownFile = this.generateReademeMD()
        return writeFileAsync("readme.md", markDownFile);
    }
}





