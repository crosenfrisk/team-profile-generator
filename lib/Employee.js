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