// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
inquirer 
    .prompt([
    {
        type: 'input',
        message: 'What is your project title?',
        name: 'title',

    },
    {
        type: 'input',
        message: 'Please enter your project description.',
        name: 'description'
    },
    {
        
        type: 'input',
        message: 'Please enter installation instructions.',
        name: 'installation',

    },
    {
        
        type: 'input',
        message: 'Please enter usage information.',
        name: 'usage',

    },
    {
        
        type: 'input',
        message: 'Please describe any contribution guidelines.',
        name: 'contribution',

    },

    {
        
        type: 'input',
        message: 'Please describe any test instructions',
        name: 'instructions.',

    },
])
    .then((answers => {
        const html = `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        <body>
            <Main>
                <h1></h1>
                <h3></h3>
                <h4></h4>
                <p></p>
            </Main>
        </body>
        </html>`
console.log(`Success!`)
    }));

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
