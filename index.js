const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const fs = require('fs');
const generatePage = require('./src/page-template.js');


const promptUser = () => {
  return inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'What is your name?'
      },
      {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username:'
      },
      {
        type: 'input',
        name: 'email',
        message: 'Provide your email address:'
      }
  ]);
}

const promptProject = () => {
    console.log(`
  =======================
   Add a New Team Member
  =======================
  `);
    return inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of your team member? (Required)'
      },
      {
        type: 'input',
        name: 'id',
        message: 'What is the employee id for your team member?'
      },
      {
        type: 'list',
        name: 'role',
        message: 'What is the role of your employee?',
        choices: ['Manager', 'Engineer', 'Intern']
      },
      {
        type: 'input',
        name: 'email',
        message: 'Enter the email address of your employee.'
        },
      {
        type: 'confirm',
        name: 'confirmAddTeamMember',
        message: 'Would you like to add another team member?',
        default: false
      }
    ]);
  };

promptUser()
.then(answers => console.log(answers));


fs.writeFile('.dist/index.html', generatePage(), err => {
    if (err) throw err;
  
    console.log('Team Webpage complete! Check out index.html to see the output!');
  });
