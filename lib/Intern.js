const inquirer = require('inquirer');
const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
      super(name, id, email);
      this.school = school;
      this.sortOrder = 3;
    }

    getSchool(){
      return this.school;
    }

    getRole() {
        return `Intern`;
    }  
  };

module.exports = Intern;