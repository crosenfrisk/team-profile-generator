// const fs = require('fs');

// const writeFile = fileContent => {
//     return new Promise((resolve, reject) => {
//         fs.writeFile('./dist/index.html', fileContent, err => {
//             if (err) {
//                 reject(err);
//                 return;
//             }
//             resolve({
//                 ok: true,
//                 message: "File created!"
//             });
//         });
//     });
//   };

//   const copyFile = () => {
//       return new Promise ((resolve, reject) => {
//         fs.copyFile('./src/style.css', './dist/style.css', err => {
//             if (err) {
//               reject(err);
//               return;
//             }
//             resolve({
//                 ok: true,
//                 message: "Style sheet copied successfully!"
//           });
//         });
//     });
// };

// module.exports = {
// writeFile, copyFile
// };


const Employee = require("../lib/Employee");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");
const Manager = require("../lib/Manager");

const generatePage = () => {
  console.log(generatePage);
    return `
        
    <!DOCTYPE html> 
    <html lang="en"> 
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>My Team Profile</title>
    </head>
  
    <body>
      <header>
        <h1>My Team</h1>
      </header>
      
      <main>
        <section>
          <h2>${Employee.name}</h2>
          <h3>${Employee.role}</h3>
          <p>${Employee.id}</p>
          <p>${Employee.email}</p>
          <p>${Manager.officeNumber}</p>
          <p>${Engineer.github}</p>
          <p>${Intern.school}</p>
        </section>
      </main>
      
    </body>
    </html>
    
    `;
};

module.exports = generatePage;