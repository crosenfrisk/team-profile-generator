const Employee = require('../lib/Employee.js');


test('checks for properties of employee object', () => {
  const employee = new Employee('Margaret');

  expect(employee).toHaveProperty('name');
  expect(employee).toHaveProperty('id');
  expect(employee).toHaveProperty('email');
});

test('looks for name property using getName() function', () => {
  const employee = new Employee('Margaret');

  // Check for name input, being a string and length greater than zero.

  expect(employee.getName()).toEqual('Margaret');
  
});

test('looks for id property using getId()', () => {
  const employee = new Employee('Margaret', 1);

  // Check for id input, being a number, greater than zero.

  expect(employee.getId()).toBe(1);
  
});

test('looks for email property using getEmail()', () => {
  const employee = new Employee('Margaret', 1, 'test@email.com');

  // Check for email address input and must include @ symbol.

  expect(employee.getEmail()).toBe('test@email.com');
  
  const emailPattern = expect.stringMatching(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/);
  
  expect(employee.getEmail()).toEqual(emailPattern);
});

test('looks for role using getRole()', () => {
  const employee = new Employee('Margaret', 1, 'test@email.com');
  
  //Check for role, must be Employee.
  expect(employee.getRole()).toBe('Employee');  
});