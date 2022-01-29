const inquirer = require('inquirer');
const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name = '') {
      super(name);
    };

    getRole() {
        return `Engineer`;
    };
 
    getGithub(username){
    return inquirer.prompt([
        {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username?'
        }
    ]);
  };
};

module.exports = Engineer;