const inquirer = require('inquirer');
const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name = '') {
      super(name);
    };

    getRole() {
        return `Intern`;
    };
 
    getSchool(username){
    return inquirer.prompt([
        {
        type: 'input',
        name: 'school',
        message: 'What is the name of your school?'
        }
    ]);
  };
};

module.exports = Intern;