const Engineer = require('../lib/Engineer.js');
const Employee = require('../lib/Employee.js');

test('Using Employee properties, Engineer should have name, id, and email', () => {
  const engineer = new Engineer('Harold');

  expect(engineer).toHaveProperty('name');
  expect(engineer).toHaveProperty('id');
  expect(engineer).toHaveProperty('email');

})

test('looks for GitHub username property using getGithub() function', () => {
  const engineer = new Engineer('Harold', 1, 'test@email.com', 'githubUsername');

  // Check for name input, being a string and length greater than zero.

  expect(engineer.getGithub()).toEqual(expect.any(String));
  
})

test('looks for role using getRole()', () => {
  const engineer = new Engineer('Harold', 1, 'test@email.com', 'githubUsername');
  
  //Check for role, must be Engineer.
  expect(engineer.getRole()).toBe('Engineer');  
});

