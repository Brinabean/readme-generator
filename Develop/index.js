// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateReadme = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project? (Required)',
        validate: titleInput => {
          if (titleInput) {
            return true;
          } else {
            console.log('You need to enter a project name!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'description',
        message: 'Provide a description of the project (Required)',
        validate: descriptionInput => {
          if (descriptionInput) {
            return true;
          } else {
            console.log('You need to enter a project description!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'installation',
        message: 'Describe the installation process.',
        validate: installationInput => {
            if (installationInput) {
                return true;
            } else {
                console.log('Describe the installation process.');
                return false;
            }
        }
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Describe the usage of your project.',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('Describe the usage of your project.');
                return false;
            }
        }
      },
      {
          type: 'input',
          name: 'contributing',
          message: 'Enter information for how people can contribute to the project.',
          validate: contributingInput => {
              if (contributingInput) {
                  return true;
              } else {
                  console.log('Enter information for how people can contribute to the project.');
                  return false;
              }
          }
      },
      {
        type: 'input',
        name: 'tests',
        message: 'Describe any tests to be ran and how to run them for your project.',
        validate: testsInput => {
            if (testsInput) {
                return true;
            } else {
                console.log('Describe any tests to be ran and how to run them for your project.');
                return false;
            }
        }
      },
      {
        type: 'list',
          message: 'Please select a license for your project.',
          name: 'license',
          choices: ['MIT License', 'GNU GPL 3 License', 'ISC License']
      },
      {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub.',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('Enter your GitHub.');
                return false;
            }
        }
      },
      {
        type: 'input',
        name: 'email',
        message: 'Enter your email.',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Enter your email.');
                return false;
            }
        }
      }
];

// TODO: Create a function to write README file
function writeToFile(data) {
    return new Promise((resolve, reject) => {
        fs.writeFile('./README.md', data, err => {
          if (err) {
            reject(err);
            return;
          }
    
          resolve({
            ok: true,
            message: 'File created!'
          });
        });
    });
};

// TODO: Create a function to initialize app
async function init() {
    const responses = await inquirer.prompt(questions);

    const markdown = generateReadme(responses);

    await writeToFile(markdown);
}

// Function call to initialize app
init();