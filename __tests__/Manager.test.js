const Manager = require('../lib/Manager.js');
const Employee = require('../lib/Employee.js');

test('Using Employee properties, Manager should have name, id, email, and office number', () => {
    const manager = new Manager('Mary');
  
    expect(manager).toHaveProperty('name');
    expect(manager).toHaveProperty('id');
    expect(manager).toHaveProperty('email');
    expect(manager).toHaveProperty('officeNumber');
  
  });

  test('looks for role using getRole()', () => {
    const manager = new Manager('Mary', 1, 'test@email.com', 'officeNumber');
    
    //Check for role, must be Manager.
    expect(manager.getRole()).toBe('Manager');  
  });