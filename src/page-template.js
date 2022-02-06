let htmlString = '';

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

constructTeam = async (team) => {
  
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