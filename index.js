// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// fs.readFile('README.md', 'utf8', (error, data) => {
//     error ? console.error(error) : console.log(data)
// };

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
        name: 'instructions',

    },
    {
        type: 'list',
        message: 'Please choose a license for the application',
        choices: ["Tier 1", "Tier 2", "Tier 3"],
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
            <nav>${answers.license}</nav>
            <Main>
                <h1>${answers.title}</h1>
                <h3>Description</h3>
                    <P>${answers.description}</P>
                <h3>Installation Instructions</h3>
                    <P>${answers.installation}</P>
                <h3>Usage Information</h3>
                    <P>${answers.usage}</P>
                <h3>Contributing Guidelines</h3>
                    <P>${answers.contribution}</P>
                <h3>Test Instructions</h3>
                    <P>${answers.instructions}</P>
                <h3>Questions</h3>
                <li>
                    <ul>${answers.gitHub}<a href="https://github.com/Mark55Kelly">Mark Kelly's Github Profile,</a></ul>
                    <ul>If you have any additional questions, please don't hesitate to reach out at: ${answers.email}</ul>
                </li>
                <h4></h4>
                <p></p>
            </Main>
        </body>
        </html>`
        fs.writeFile('index.html', html, err => err ? console.log(err) : console.log("Successful!"))
//console.log(`Success!`)
    }));

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.appendFile("readme.md", `${html}`, (err) => err ? console.error(err) : console.log('Success!'))

};

// TODO: Create a function to initialize app
function init() {
    writeToFile();

}

// Function call to initialize app
init();
