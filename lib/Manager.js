const inquirer = require('inquirer');
const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name = '') {
      super(name);
    };

    getRole() {
        return `Manager`;
    };
 
    officeNumber(){
    return inquirer.prompt([
        {
        type: 'input',
        name: 'phone number',
        message: 'What is the phone number to your office?'
        }
    ]);
  };
};

module.exports = Manager;