class Employee {
    constructor(name, role){
      this.name = getName;
      this.role = getRole;
    }
  
  getName(){
      return inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is your name?'
      }
    ]);
  }
  
  getId(){
    return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your employee id?'
    }
  ]);
  }
  
  getEmail(){
    return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your employee email address?'
    }
  ]);
  }
  
  getRole(){
    return inquirer.prompt([
      {
        type: 'checkbox',
        choices: ['Manager', 'Engineer', 'Intern'],
        message: 'What is your role?'
      }
    ]);
  }
}

  module.exports = Employee;