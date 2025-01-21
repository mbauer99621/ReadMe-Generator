//Maya Li Bauer
//January 21, 2025
//index.js


// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs'; 
import generateMarkdown from './utils/generateMarkdown.js';

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your project title?'
    },
    {
        type: 'input',
        name: 'projectDescription',
        message: 'What is the description of your project? Explain the what, why, and how of your project.'
    },
    {
        type: 'input',
        name: 'tableOfContents',
        message: 'What do you want to add to your table of contents? Seperate your input with commas.'
    },
    {
        type: 'input',
        name: 'installProject',
        message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.',
    },
    {
        type: 'input',
        name: 'usage',
        message:  'Provide instructions and examples for use. Include screenshots as needed.'
    },
    {
        type: 'input',
        name: 'collaborators',
        message:  'Who are your collaborators, if any. Did you use any third party assets or tutorials to complete the project?'
    },
    {
        type: 'input',
        name: 'license',
        message:  'What is the license? e.g: mit, lgpl-3.0, mpl-2.0, agpl-3.0, unlicense, apache-2.0, or gpl-3.0.'
    },
    {
        type: 'input',
        name: 'guidelines',
        message: 'If you want other developers to contribute to your project, what are your guidelines? If you do not want anyone contributing, type N/A'
    },
    {   type: 'input', 
        name: 'tests', 
        message: 'Give instructions for running tests on your project.' 
    },
    {
        type: 'input', 
        name: 'github', 
        message: 'What is your GitHub username?:' 
    },
    { 
        type: 'input', 
        name: 'email', 
        message: 'What is your email address?:' 
    },
    
    
       
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err =>  {
        //if there is an error, print this to the console
        if(err) {  
            console.error('Can Not Write to File, Try Again', err);
        } else {
        //else, it will tell the user that the file was sucessfully written to
            console.log(`Successfully written to: ${fileName}`);
        }
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)      //prompts the user for their answers to the questions
    .then(answers => {
        //generates the markdown for the README.md
        const contentOfReadMe = generateMarkdown(answers);
        writeToFile('README.md', contentOfReadMe);
    }) 
    //else the console tells the user to try again
    .catch(error => {
        console.error('Error, Please Try Again', error);
    });
}

// Function call to initialize app
init();

