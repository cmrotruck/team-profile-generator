const Manager = require("../lib/Manager");

//generate my team banner at top of the page
const generateBanner = () => {
  return `
    <section class="col-12 text-center jumbotron" id="banner">
        My Team
    </section>
    `;
};

const generateManager = (manager) => {
  //console.log(manager);
  return `
        <section class="card text-white col-4" style="max-width: 18rem;">
            <div class="card-header bg-primary">
                ${manager.firstName}
                <h5 class="card-title">Manager</h5>
            </div>
            <div class="card-body bg-light align-items ">                
                <ul class="list-group">
                    <li class="list-group-item">ID: ${manager.id}</li>
                    <li class="list-group-item">Email: ${manager.email}</li>
                    <li class="list-group-item">Phone: ${manager.phone}</li>
                </ul>
            </div>
        </section>
    `;
};

const generateEngineer = (engineer) => {
  //console.log(engineer);
  return `
        <section class="card text-white col-4" style="max-width: 18rem;">
            <div class="card-header bg-primary">
                ${engineer.firstName}
                <h5 class="card-title">Engineer</h5>
            </div>
            <div class="card-body bg-light align-items ">                
                <ul class="list-group">
                    <li class="list-group-item">Id: ${engineer.id}</li>
                    <li class="list-group-item">Email: ${engineer.email}</li>
                    <li class="list-group-item">Github: ${engineer.gitHub}</li>
                </ul>
            </div>
        </section>
    `;
};

const generateIntern = (intern) => {
  //console.log(intern);
  return `
        <section class="card text-white col-4" style="max-width: 18rem;">
            <div class="card-header bg-primary">
                ${intern.firstName}
                <h5 class="card-title">Intern</h5>
            </div>
            <div class="card-body bg-light align-items ">                
                <ul class="list-group">
                    <li class="list-group-item">Id: ${intern.id}</li>
                    <li class="list-group-item">Email: ${intern.email}</li>
                    <li class="list-group-item">School: ${intern.school}</li>
                </ul>
            </div>
        </section>
    `;
};

const generateCards = (teamData) => {
  //destructure page data by section
  //console.log(teamData);
  const { employees, ...manager } = teamData;
  const fullName = manager.firstName + " " + manager.lastName;

  var html = generateManager(manager);
  //console.log(employees);
  employees.forEach((employee) => {
    //console.log(employee)
    if (employee.role === "Engineer") {
      //console.log('entered Engineer branch : ');
      //console.log(employee)
      html = html + generateEngineer(employee);
    }
    if (employee.role === "Intern") {
      //console.log('entered intern branch: ');
      //console.log(employee);
      html = html + generateIntern(employee);
    }
    // console.log(html);
  });
  return html;
};

module.exports = (templateData) => {
  var html = `
    <!DOCTYPE html>
    <html lang="eng">

    <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <title>Portfolio Demo</title>

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
        integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
</head>

    <body>
        <header>
            ${generateBanner()}
        </header>

        <main class="container">
            <div class="row justify-content-center">
                ${generateCards(templateData)}
            </div>
        </main>

        <footer class="container text-center py-3">
            <h3 class="text-dark">&copy; ${new Date().getFullYear()} by Chad Rotruck</h3>
        </footer>
    </body>
    </html>
    `;
  return html;
};
//generate team section
