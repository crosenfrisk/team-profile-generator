const Intern = require('../lib/Intern.js');
const Employee = require('../lib/Employee.js');

test('Using Employee properties, Intern should have name, id, email, and school', () => {
    const intern = new Intern('Ingrid');
  
    expect(intern).toHaveProperty('name');
    expect(intern).toHaveProperty('id');
    expect(intern).toHaveProperty('email');
    expect(intern).toHaveProperty('school');
  
  })
  
  test('looks for school name property using getSchool() function', () => {
    const intern = new Intern('Ingrid', 1, 'test@email.com', 'schoolName');
  
    // Check for name input, being a string and length greater than zero.
  
    expect(intern.getSchool()).toEqual(expect.any(String));
    
  })

  test('looks for role using getRole()', () => {
    const intern = new Intern('Ingrid', 1, 'test@email.com', 'schoolName');
    
    //Check for role, must be Intern.
    expect(intern.getRole()).toBe('Intern');  
  });