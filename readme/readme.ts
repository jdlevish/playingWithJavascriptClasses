// creat a readme file for projects using typscript and class syntax
// import inquirer from "inquirer";
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
    // method that writes the markdown file from the user input
    generateReademeMD = () => {

        return `
        ![](${answers.screenShot})
        # ${answers.title}
        
        ## ![](https://img.shields.io/github/license/${answers.github}/${answers.title}/)
        
        ## Table Of Contents
        
        *[Description](#Description)
        
        *[installation](#Installation)
        
        *[requirements](#requirements)
        
        *[Usage Instructions](#Usage-Instructions)
        
        *[Running the tests](#Running-the-tests)
        
        *[Contributing](#Contributing)
        ## Description
        ${answers.description}
            
        ## Installation
            
        ${answers.installation}
            
        ## Requirements
            
        ${answers.requirements}
        ## Usage Instructions
        
        ${answers.usage}
            
        ## Running the tests
            
        ${answers.tests}
            
        ## Contributing
            
        ${answers.contributions}
        
        ## Additional questions
        contact the creator at ${answers.email} or ${answers.github} on github.com
        
        ## licensing
        this project is covered under the ${answers.license} for more info view the  [license.txt](/license.txt)
            `
            ;
    }
}

export default readme


