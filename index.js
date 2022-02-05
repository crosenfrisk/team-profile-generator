// npm package
const inquirer = require('inquirer');

// Required file locations
const fs = require('fs');
const generatePage = require('./src/page-template-copy');
const { writeFile, copyFile } = require('./utils/generate-site');
const { profile } = require('console');

// TODO: Dynamically create role using classes 
// Required Classes from ./lib
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');

// Array to store team members' information from prompts
var team = [];

// Command to write HTML page using team information
teamProfilePage = async () => {
  writeFile(generatePage(team));
};

// Root menu, Manager chooses additional employee roles to add, or finishes to exit application and generate HTML.
menuOptions = async () => {
  return inquirer.prompt([
    {
      type: 'list',
      name: 'employeeRole',
      message: 'Please choose a type of employee to add, or "Done" to complete input and generate profile page.',
      choices: ['Engineer', 'Intern', 'Done'],
    }
  ])
};

// When adding more members, the Manager will select which role the employee is, and then answer proper questions for each.
// For adding engineer(s)

addEngineer = async () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is the name of your team member? (Required)',
      validate: addName => {
        if (addName){
          return true;
        } else {
          console.log('You must enter a name for your team member!');
        }
      }
    },
    {
      type: 'input',
      name: 'id',
      message: 'What is the employee id for your team member? (Required)',
      validate: addId => {
         if (addId){
          return true;
        } else {
          console.log('You must enter an employee id for your team member!');
        }
      }
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter the email address of your employee. (Required)'
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter the GitHub username for your engineer: (Required)'
    }
  ])
  .then((engineer) => {
    const engineerInstance = new Engineer(engineer.name, engineer.id, engineer.email, engineer.github);
    team.push(engineerInstance)})
  .then(() => {compileTeam()});
}

// For adding intern(s)
addIntern = async () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is the name of your team member? (Required)',
      validate: addName => {
        if (addName){
          return true;
        } else {
          console.log('You must enter a name for your team member!');
        }
      }
    },
    {
      type: 'input',
      name: 'id',
      message: 'What is the employee id for your team member? (Required)',
      validate: addId => {
         if (addId){
          return true;
        } else {
          console.log('You must enter an employee id for your team member!');
        }
      }
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter the email address of your employee. (Required)'
    },
    {
      type: 'input',
      name: 'internSchool',
      message: 'Enter the school name of your intern: (Required)'
    }
  ])
  .then((intern) => {
    const internInstance = new Intern(intern.name, intern.id, intern.email, intern.school);
    team.push(internInstance);
  })
  .then(() => {compileTeam()});
}

// End program and communicate in console that profile is being created.
finish = async () => {
  console.log('Your team profile is being generated!');
  teamProfilePage();
}

compileTeam = () => {
  // generate team profile using prompt answers
  menuOptions()
  .then(answers => {
    if (answers.employeeRole === "Engineer"){
      addEngineer();
    }

    if (answers.employeeRole === "Intern"){
      addIntern();
    }

    if (answers.employeeRole === "Done"){
      finish();
    }
  })
}

// first questions are for the manager, other functions follow to generate team members
promptManager = async () => {
  console.log(`
  =============================================================================================================
  Welcome to the Team Profile Generator -- Please enter your information and a website will be created for you!
  =============================================================================================================
  `);

  return inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'Hello, Manager. What is your name? (Required)',
        validate: managerName => {
          if (managerName) {
            return true;
          } else {
            console.log('Please enter your name!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'id',
        message: 'Please enter your employee ID: (Required)',
        validate: employeeId => {
          if (employeeId) {
            return true;
          } else {
            console.log('Please enter your employee id!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'email',
        message: 'Please provide your work email address: (Required)',
        validate: emailAddress => {
          if (emailAddress) {
            return true;
          } else {
            console.log('Please enter your work email address!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'officeNumber',
        message: 'Please provide your office phone number: (Required)',
        validate: officeNumber => {
          if (officeNumber) {
            return true;
          } else {
            console.log('You must provide the phone number for your office!');
          } return false;
        }
      },
    ])
  };


// Run application once user types node index.js in command line
promptManager()
 .then( (manager) => {
    const managerInstance = new Manager(manager.name, manager.id, manager.email, manager.officeNumber);
    team.push(managerInstance);
    compileTeam()})  
 .catch(err => {
    console.log(err);
  });



