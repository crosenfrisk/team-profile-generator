const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const fs = require('fs');
const generatePage = require('./src/generate-site.js');
const { writeFile, copyFile } = require('./src/generate-site.js');


const promptUser = () => {
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
        name: 'office number',
        message: 'Please provide your office phone number: (Required)',
        validate: officeNumber => {
          if (officeNumber) {
            return true;
          } else {
            console.log('You must provide the phone number for your office!');
          } return false;
        }
      }
  ]);
}

const promptAddTeamMember = (profileData) => {
    console.log(`
  =======================
   Add a New Team Member
  =======================
  `);
  // If there are no 'team members' create an empty array to hold values
      if (!profileData.teamMembers) {
        profileData.teamMembers = [];
      }

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
        type: 'list',
        name: 'role',
        message: 'What is the role of your employee?',
        choices: ['Engineer', 'Intern']
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
        default: false,
        when: ({ confirmAddTeamMember }) => confirmAddTeamMember
      }
    ])
    .then(profilePage => {
      profileData.teamMembers.push(profilePage);
      if (profilePage.confirmAddTeamMember) {
        return promptAddTeamMember(profileData);
      } else {
        return profileData;
      }
    });
  };

promptUser()
  .then(promptAddTeamMember)
  .then(profileData => {
  return generatePage(profileData);
  })
  
  .then(pageHTML => {
  return writeFile(pageHTML);
  })
  
  .then(writeFileResponse => {
  console.log(writeFileResponse);
    return copyFile();
  })
  
  .then(copyFileResponse => {
    console.log(copyFileResponse);
  })
  
  .catch(err => {
    console.log(err);
  });



