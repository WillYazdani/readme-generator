// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require('./Develop/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [

    { //title
        type: "input",
        name: "title",
        message: "Enter your repo name:"
    },

    { //description
        type: "input",
        name: "description",
        message: "Enter repo description:"
    },

    { //installation
        type: "input",
        name: "installation",
        message: "Enter instiallation instructions:"
    },

    { //usage
        type: "input",
        name: "usage",
        message: "Enter usage instructions:"
    },

    { //contributing
        type: "input",
        name: "contributing",
        message: "Enter contribution instructions:"
    },

    { //tests
        type: "input",
        name: "tests",
        message: "Enter testing instructions:"
    },

    { //liscense
        type: "list",
        name: "liscense",
        message: "Choose a liscense:",
        choices: ["MIT", "Creative Commons", "Apache 2.0", "None"]
    },

    { //username
        type: "input",
        name: "username",
        message: "Enter your GitHub username:"
    },

    { //email
        type: "input",
        name: "email",
        message: "Enter your email address:"
    },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();