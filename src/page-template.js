// Will hold all the generated html strings below into one string which will be used as a template literal in generatePage()
let htmlString = '';

// Each employee response from the prompt will generate html
// Manager will always be appear first in the htmlString. 
// Not only is the prompt answered first, but
// The sortOrder "1" is determined in the lib/Manager.js file.
const managerDiv = (Manager) => {
  return `
        <div class="col-sm-3">
          <div class="card shadow p-3 mb-5 bg-white rounded" style="width: 20rem">
            <div class="card-body">
              <h5 class="card-title">${Manager.name}</h5>
              <p class="card-text"><img src="../images/svg/star-solid.svg"> ${Manager.getRole()}</p>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Employee ID: ${Manager.id}</li>
              <li class="list-group-item">Employee Email: <a href="mailto:${Manager.email}" id="link">${Manager.email}</a></li>
              <li class="list-group-item">Office Phone Number: ${Manager.officeNumber}</li>
            </ul>
          </div>
        </div>`
};

// Engineers and Interns are menu options; the person answering the prompts
// can input in ANY order, however because of the sortOrder value attributed to each
// in lib/Engineer.js and lib/Intern.js, Engineers will be sorted into a group "2" and
// appear after a Manager in the generated htmlString.
const engineerDiv = (Engineer) => {
  return `
  <div class="col-sm-3">
    <div class="card shadow p-3 mb-5 bg-white rounded" style="width: 20rem">
      <div class="card-body">
        <h5 class="card-title">${Engineer.name}</h5>
        <p class="card-text"><img src="../images/svg/glasses-solid.svg"> ${Engineer.getRole()}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Employee ID: ${Engineer.id}</li>
          <li class="list-group-item">Employee Email: <a href="mailto:${Engineer.email}" id="link">${Engineer.email}</a></li>
          <li class="list-group-item">GitHub Profile: <a href="https://github.com/${Engineer.github}" target="_blank" id="link">${Engineer.github}</a> </li>
      </ul>
    </div>
  </div>`
};

// Interns always follow the Engineers and Manager, as sortOrder "3" in the htmlString.
const internDiv = (Intern) => {
  return `        
  <div class="col-sm-3">
  <div class="card shadow p-3 mb-5 bg-white rounded" style="width: 20rem">
    <div class="card-body">
      <h5 class="card-title">${Intern.name}</h5>
      <p class="card-text"><img src="../images/svg/user-graduate-solid.svg"> ${Intern.getRole()}</p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Employee ID: ${Intern.id}</li>
      <li class="list-group-item">Employee Email: <a href="mailto:${Intern.email}" id="link">${Intern.email}</a></li>
      <li class="list-group-item">School: ${Intern.school}</li>
    </ul>
  </div>
</div>`
};


// This function puts together the answers from the team array from index.js.
constructTeam = async (team) => {
  // sort helps determine which comes first no matter which order the team members were entered.
  team.sort((a, b) => {
    if (a.sortOrder < b.sortOrder) {
      return -1
    }
    if (a.sortOrder > b.sortOrder) {
      return 1;
    }
    if (a.sortOrder === b.sortOrder) {
      return 0;
    }
  })
  
  //htmlString is generated from this for() loop, iterating through team[].
  for(var i = 0; i < team.length; i++){
    if(team[i].getRole() === "Manager"){
      htmlString = htmlString.concat(managerDiv(team[i]));
    }
    if(team[i].getRole() === "Engineer"){
      htmlString = htmlString.concat(engineerDiv(team[i]));
    }
    if(team[i].getRole() === "Intern"){
      htmlString = htmlString.concat(internDiv(team[i]));
    }
  }
};

// This function creates the entire index.html file; it contains the body template 
// and has a template literal for ${htmlString} allowing the index.html file to reflect
// the information answered from the prompts and display in a set order.
const generatePage = (team) => {
  constructTeam(team);
  return `
        
  <!DOCTYPE html> 
  <html lang="en"> 
    
  <head>

      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">

      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">

      <link rel="stylesheet" href="./style.css">
      
      <title> My Team Profile </title>
  </head>

    <body>

      <header>
        <h1>My Team</h1>
      </header>
    
      <main>
        <div class="row">

          ${htmlString}

        </div>
      </main>
    
    </body>
  </html>`
};

module.exports = generatePage;