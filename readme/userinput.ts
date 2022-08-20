import Readme from "./readme";
import inquirer from "inquirer";
interface answers {
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
const userInput = inquirer.prompt([]).then(answers => { })
