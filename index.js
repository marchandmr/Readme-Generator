const inquirer = require("inquirer");
const fs = require('fs');


// array of questions for user
inquirer
const questions = [
    {
        type: "input",
        name: "name",
        message: "what is your projects name?"
    },
    {
        type: "input",
        name: "description",
        message: "input project description:"
    },
    {
        type: "input",
        name: "installation",
        message: "input installation instructions:"
    },
    {
        type: "input",
        name: "usage",
        message: "input usage information:"
    },
    {
        type: "input",
        name: "contribution",
        message: "input contribution guidlines:"
    },
    {
        type: "input",
        name: "test",
        message: "input test instructions:"
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'Choose a license',
        default: 'MIT License',
        choices: [
            'MIT License',
            'Apache License 2.0',
            'GNU GPLv3'
        ]
    },
    {
        type: "input",
        name: "Github",
        message: "input Github username:"
    },
    {
        type: "input",
        name: "Email",
        message: "input E-mail address:"
    },

];
prompt(questions);
// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
