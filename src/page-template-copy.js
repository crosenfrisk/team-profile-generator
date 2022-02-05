// ALL OF THIS IS FROM PROFILE GENERATOR TEMPLATE
//

const Employee = require("../lib/Employee");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");
const Manager = require("../lib/Manager");

const generatePage = () => {
    return `
        
    <!DOCTYPE html> 
    <html lang="en"> 
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
      <link ref="dist\style.css">
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

// const generatePage = (name, github) => {
//     return `
//     <!DOCTYPE html> 
//     <html lang="en"> 
//     <head>
//       <meta charset="UTF-8">
//       <meta name="viewport" content="width=device-width, initial-scale=1.0">
//       <meta http-equiv="X-UA-Compatible" content="ie=edge">
//       <title>Portfolio Demo</title>
//     </head>
  
//     <body>
//       <h1>${name}</h1>
//       <h2><a href="https://github.com/${github}">Github</a></h2>
//     </body>
//     </html>
//     `;
//   };

//   // create about section
//   const generateAbout = aboutText => {
//     if (!aboutText){
//       return '';
//     }

//     return `
//     <section class="my-3" id="about">
//         <h2 class="text-dark bg-primary p-2 display-inline-block"> About Me </h2>
//         <p> ${aboutText} </p>
//     </section>
//     `;
//   };

//   const generateProjects = projectsArr => {
//     return `
//       <section class="my-3" id="portfolio">
//         <h2 class="text-dark bg-primary p-2 display-inline-block">Work</h2>
//         <div class="flex-row justify-space-between">
//         ${projectsArr
//           .filter(({ feature }) => feature)
//           .map(({ name, description, languages, link }) => {
//             return `
//             <div class="col-12 mb-2 bg-dark text-light p-3">
//               <h3 class="portfolio-item-title text-light">${name}</h3>
//               <h5 class="portfolio-languages">
//                 Built With:
//                 ${languages.join(', ')}
//               </h5>
//               <p>${description}</p>
//               <a href="${link}" class="btn"><i class="fab fa-github mr-2"></i>View Project on GitHub</a>
//             </div>
//           `;
//           })
//           .join('')}
  
//         ${projectsArr
//           .filter(({ feature }) => !feature)
//           .map(({ name, description, languages, link }) => {
//             return `
//             <div class="col-12 col-md-6 mb-2 bg-dark text-light p-3 flex-column">
//               <h3 class="portfolio-item-title text-light">${name}</h3>
//               <h5 class="portfolio-languages">
//                 Built With:
//                 ${languages.join(', ')}
//               </h5>
//               <p>${description}</p>
//               <a href="${link}" class="btn mt-auto"><i class="fab fa-github mr-2"></i>View Project on GitHub</a>
//             </div>
//           `;
//           })
//           .join('')}
//         </div>
//       </section>
//     `;
//   };
  
//   module.exports = templateData => {
//     // destructure page data by section
//     const { projects, about, ...header } = templateData;
  
//     return `
//     <!DOCTYPE html>
//     <html lang="en">
  
//     <head>
//       <meta charset="UTF-8">
//       <meta name="viewport" content="width=device-width, initial-scale=1.0">
//       <meta http-equiv="X-UA-Compatible" content="ie=edge">
//       <title>Portfolio Demo</title>
//       <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
//       <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
//       <link rel="stylesheet" href="style.css">
//     </head>
  
//     <body>
//       <header>
//         <div class="container flex-row justify-space-between align-center py-3">
//           <h1 class="page-title text-secondary bg-dark py-2 px-3">${header.name}</h1>
//           <nav class="flex-row">
//             <a class="ml-2 my-1 px-2 py-1 bg-secondary text-dark" href="https://github.com/${
//               header.github
//             }">GitHub</a>
//           </nav>
//         </div>
//       </header>
//       <main class="container my-5">
//             ${generateAbout(about)}
//             ${generateProjects(projects)}
//       </main>
//       <footer class="container text-center py-3">
//         <h3 class="text-dark">&copy; ${new Date().getFullYear()} by ${header.name}</h3>
//       </footer>
//     </body>
//     </html>
//     `;
//   };