const inquirer = require('inquirer');
const Employee = require('.lib/Employee');
const Engineer = require('.lib/Engineer');
const Manager = require('.lib/Manager');
const Intern = require('.lib/Intern');
const fs = require('fs');
const generatePage = require('./src/page-template.js');


// const promptUser = () => {
//   return inquirer.prompt([

//   ]);
// };

// promptUser().then(answers => console.log(answers));


// fs.writeFile('index.html', generatePage(), err => {
//     if (err) throw err;
  
//     console.log('Team Webpage complete! Check out index.html to see the output!');
//   });
