const Engineer = require('../lib/Engineer.js');
const Employee = require('../lib/Employee.js');

jest.mock('../lib/Engineer.js');

test('creates an employee object', () => {
  const employee = new Employee(name, role);

  expect(employee.name).toBe('');
  expect(employee.role).toBe('');
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toEqual(expect.any(Object));
});