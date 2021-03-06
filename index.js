// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./Develop/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([

        { //title
            type: "input",
            name: "title",
            message: "Enter your repo name:",
            validate: (userInput) => {
                if (userInput) {
                    return true
                }
                return false;
            }
        },

        { //description
            type: "input",
            name: "description",
            message: "Enter repo description:",
            validate: (userInput) => {
                if (userInput) {
                    return true
                }
                return false;
            }
        },
        
        { //installation
            type: "input",
            name: "installation",
            message: "Enter instiallation instructions:",
            validate: (userInput) => {
                if (userInput) {
                    return true
                }
                return false;
            }
        },

        { //usage
            type: "input",
            name: "usage",
            message: "Enter usage instructions:",
            validate: (userInput) => {
                if (userInput) {
                    return true
                }
                return false;
            }
        },

        { //contributing
            type: "input",
            name: "contributing",
            message: "Enter contribution instructions:",
            validate: (userInput) => {
                if (userInput) {
                    return true
                }
                return false;
            }
        },

        { //tests
            type: "input",
            name: "tests",
            message: "Enter testing instructions:",
            validate: (userInput) => {
                if (userInput) {
                    return true
                }
                return false;
            }
        },

        { //liscense
            type: "list",
            name: "license",
            message: "Choose a liscense:",
            choices: ["MIT", "Creative Commons", "Apache 2.0", "None"]
        },

        { //username
            type: "input",
            name: "username",
            message: "Enter your GitHub username:",
            validate: (userInput) => {
                if (userInput) {
                    return true
                }
                return false;
            }
        },

        { //email
            type: "input",
            name: "email",
            message: "Enter your email address:",
            validate: (userInput) => {
                if (userInput) {
                    return true
                }
                return false;
            }
        },

    ])
    //generate readme function
    .then(data => {
        const readme = generateMarkdown(data);
        writeToFile("README.md", readme)
    });
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile(fileName, data, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: "New file created."
            });
            console.log("Your README has been created.");
        });
    })
};

// TODO: Create a function to initialize app
function init() {
    questions()
}

// Function call to initialize app
init();