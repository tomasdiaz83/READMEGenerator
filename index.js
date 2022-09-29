//const answers = { title: "test", description: "test", install: "test", usage: "test", contribution: "test", testing: "test", gitHub: "test", email: "test", license: "test" }

// TODO: Include packages needed for this application
import generateMarkdown from './utils/generateMarkdown.js';
import fs from 'fs';
import inquirer from 'inquirer';

// TODO: Create an array of questions for user input
const questions = [
    //Name
    {
        type: 'input',
        name: 'name',
        message: 'What is your name?',
        default: 'unnamed'
    },
    //Project Title
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
        default: 'untitled'
    },
    //Project Description
    {
        type: 'input',
        name: 'description',
        message: 'Please enter a short description of your project.',
        default: '...'
    },
    //Installation instructions
    {
        type: 'input',
        name: 'install',
        message: 'Please enter the instructions for installing your project.',
        default: `...`
    },
    //Usage Information
    {
        type: 'input',
        name: 'usage',
        message: 'Please give an overview of how you expect this project to be used.',
        default: '...'
    },
    //Instructions to Contribute
    {
        type: 'input',
        name: 'contribution',
        message: 'Please give instructions on how one may contribute to the project.',
        default: `...`
    },
    //Instructions to Test
    {
        type: 'input',
        name: 'test',
        message: 'Please explain how a user may go about testing the project.',
        default: `...`
    },
    //GitHub
    {
        type: 'input',
        name: 'gitHub',
        message: 'Please enter your gitHub.',
        default: `...`
    },
    //Email
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email',
        default: `...`
    },
    //License to Use
    {
        type: 'list',
        name: 'license',
        message: 'Which license do you wish to employ?',
        choices: [`MIT`, `GNU GPLv3`, `Apache License 2.0`],
        filter(val) {
            return val.toLowerCase();
        }
    },
];

// TODO: Create a function to initialize app
const init = () => {
    inquirer
        .prompt(questions)
        .then((answers) => {
            let { title, description, install, usage, contribution, test, gitHub, email, license } = answers;
            fs.writeFile('./GeneratedREADME/README.md', generateMarkdown(title, description, install, usage, contribution, test, gitHub, email, license), err => {
                if (err) {
                    console.error(err);
                } else {
                    console.log("README successfully created!")
                }
            })  
        })
}

// Function call to initialize app
init();
