const inquirer = require("inquirer");
const generateMarkdown = require('./utils/generateMarkdown.js');
const fs = require('fs');
const util = require('util');
const writeFileAsync = util.promisify(fs.writeFile);


// array of questions for user

const questions = () =>
    inquirer.prompt(

        [
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
                default: 'MIT',
                choices: [
                    'MIT',
                    'Apache-2.0',
                    'GNU-GPLv3'
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
            }

        ]);
questions()
    .then((data) => {
        writeFileAsync('readme.md', generateMarkdown(data))
    });




