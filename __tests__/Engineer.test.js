const Engineer = require('../lib/Engineer.js');
const Employee = require('../lib/Employee.js');
const { expect } = require('@jest/globals');

test('Using Employee properties, Engineer should have name, id, email, and github username', () => {
  const engineer = new Engineer('Harold');

  expect(engineer).toHaveProperty('name');
  expect(engineer).toHaveProperty('id');
  expect(engineer).toHaveProperty('email');
  expect(engineer).toHaveProperty('github');

})

test('looks for GitHub username property using getGithub() function', () => {
  const engineer = new Engineer('Harold', 1, 'test@email.com', 'github');

  // Check for name input, being a string and length greater than zero.

  expect(engineer.getGithub()).toEqual(expect.any(String));
  
})

test('looks for role using getRole()', () => {
  const engineer = new Engineer('Harold', 1, 'test@email.com', 'githubUsername');
  
  //Check for role, must be Engineer.
  expect(engineer.getRole()).toBe('Engineer');  
});

