// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);

// fs.readFile('README.md', 'utf8', (error, data) => {
//     error ? console.error(error) : console.log(data)
// };

// TODO: Create an array of questions for user input
let init = () =>
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
                name: 'instructions',

            },
            {
                type: 'list',
                message: 'Please choose a license for the application',
                choices: ["BSD", "MIT", "GPL", "N/A"],
                name: 'license'
            },
            {
                type: 'input',
                message: 'What is your GitHub username?',
                name: 'gitHub',

            },
            {
                type: 'input',
                message: 'What is your email address?',
                name: 'email',

            },
        ])

function generateMD(answers) {
    return `#ReadMe 
## ${answers.title}:
## Description:
${answers.description}
## Table of Contents: 
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
### Installation: 
In order to install the necessary dependencies, open the console and run the following: 
${answers.installation}
### Usage:
${answers.usage}
### License:
This project is licensed under:
${answers.license}
### Contributing:
${answers.contribution}
### Tests:
In order to test open the console and run the following:
${answers.instructions}
### Questions:
If you have any questions contact Mark Kelly on [GitHub](https://github.com/${answers.gitHub}) or you may contact me at ${answers.email}
`
}

init()
    .then((answers) => writeFileAsync('generateREADME.md', generateMD(answers)))
    .then(() => console.log('Success!'));
