// npm package
const inquirer = require('inquirer');

// classes
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');

// required files
const fs = require('fs');
const generatePage = require('./src/generate-site.js');
const { writeFile, copyFile } = require('./src/generate-site.js');
const { profile } = require('console');
const { off } = require('process');

// store team members' information from prompts
var team = [];

// command to write page using team information
teamProfilePage = () => {
  writeFile(generatePage(team));
};

// to end program and communicate in console that profile is being created.
finish = () => {
  console.log('Your team profile is being generated!');
  generatePage();
}

// function to select additional employee type after manager, or finish program.
displayTeamMembers = () => {
  await menuConfirm()
  .then(answers => {
    if (answers.employeeRole === "Engineer"){
      engineerQuestions();
    }

    if (answers.employeeRole === "Intern"){
      internQuestions();
    }

    if (menuConfirm === false){
      finish();
    }
  })
}

// first questions are for the manager, other functions follow to generate team members
promptUser = () => {
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
        name: 'office number',
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
    .then (({name, id, email, officeNumber}) => {
      team.push(new Manager(name, id, email, officeNumber));
      console.log(name);
      displayTeamMembers();
    })
  };

// menu options for manger to choose, add more team members or finish
menuConfirm = () => {
  return inquirer.prompt([
    {
      type: "confirm",
      name: "addEmployee",
      message: "Would you like to add more employees to your team profile page?",
      default: true
    }
  ])
};
  
// when adding more members, manager will select role, and then answer proper questions
addTeamMembers = () => {
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
      message: 'Enter the email address of your employee. (Required)'
    },
    {
      type: 'input',
      name: 'engineerGithub',
      message: 'Enter the GitHub username for your engineer: (Required)',
      when: ({role}) => {
        if (role === 'Engineer'){
          return true;
        } else {
          return false;
        }
      },
    },
    {
      type: 'input',
      name: 'internSchool',
      message: 'Enter the school name of your intern: (Required)',
      when: ({role}) => {
        if (role === 'Intern'){
          return true;
        } else { 
          return false;
        }
      },
    }
  ]);
};

// generate team profile using prompt answers;
createTeamProfile(){
      let team = {};
      let managerInfo = this.questionsForManager;
    }
      {
        type: 'confirm',
        name: 'confirmAddTeamMember',
        message: 'Would you like to add another team member?',
        default: false,
        when: ({ confirmAddTeamMember }) => confirmAddTeamMember
      }
    ],

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



