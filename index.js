const inquirer = require('inquirer');
const fs = require('fs');
const generatePage = require('./src/page-template.js');

class Employee {
  constructor(name, role){
    this.name = getName;
    this.role = getRole;
  }
}

const getName = () =>{
    return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?'
    }
  ]);
}

const getId = () =>{
  return inquirer.prompt([
  {
    type: 'input',
    name: 'name',
    message: 'What is your employee id?'
  }
]);
}

const getEmail = () =>{
  return inquirer.prompt([
  {
    type: 'input',
    name: 'name',
    message: 'What is your employee email address?'
  }
]);
}

const getRole = () =>{
  return inquirer.prompt([
    {
      type: 'checkbox',
      choices: ['Manager', 'Engineer', 'Intern'],
      message: 'What is your role?'
    }
  ]);
}

// const promptUser = () => {
//   return inquirer.prompt([

//   ]);
// };

// promptUser().then(answers => console.log(answers));


// fs.writeFile('index.html', generatePage(), err => {
//     if (err) throw err;
  
//     console.log('Team Webpage complete! Check out index.html to see the output!');
//   });
