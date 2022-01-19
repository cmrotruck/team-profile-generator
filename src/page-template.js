const Manager = require("../lib/Manager");


//generate my team banner at top of the page
const generateBanner = () => {
    return `
    <section class="col-12 text-center jumbotron" id="banner">
        My Team
    </section>
    `
}

const generateManager = manager => {

    return `
        <section class="card text-white col-4" style="max-width: 18rem;">
            <div class="card-header bg-primary">
                ${manager.firstName}
                <h5 class="card-title">Manager</h5>
            </div>
            <div class="card-body bg-light align-items ">                
                <ul class="list-group">
                    <li class="list-group-item">${manager.Id}</li>
                    <li class="list-group-item">${manager.email}</li>
                    <li class="list-group-item">${manager.phone}</li>
                </ul>
            </div>
        </section>
    `;
}

const generateEngineer = engineer => {
    //console.log(engineer);
    return `
        <section class="card text-white col-4" style="max-width: 18rem;">
            <div class="card-header bg-primary">
                ---engineer first name---
                <h5 class="card-title">Manager</h5>
            </div>
            <div class="card-body bg-light align-items ">                
                <ul class="list-group">
                    <li class="list-group-item">---id---</li>
                    <li class="list-group-item">---email---</li>
                    <li class="list-group-item">---github---</li>
                </ul>
            </div>
        </section>
    `;
}

const generateIntern = intern => {
    //console.log(intern);
    return `
        <section class="card text-white col-4" style="max-width: 18rem;">
            <div class="card-header bg-primary">
                ---intern name---
                <h5 class="card-title">Manager</h5>
            </div>
            <div class="card-body bg-light align-items ">                
                <ul class="list-group">
                    <li class="list-group-item">---id---</li>
                    <li class="list-group-item">---email---</li>
                    <li class="list-group-item">---school---</li>
                </ul>
            </div>
        </section>
    `;
}

const generateCards = employees => {
    var html;
    // console.log(employees);
    employees.forEach(employee => {
        if (employee.type === "Engineer") {
            //console.log('entered Engineer branch');
            html = html + generateEngineer(employee);
        }
        if (employee.type === "Intern") {
            //console.log('entered intern branch');
            html = html + generateIntern(employee);
        }
        //console.log(html);
        return html;
    });
}


module.exports = templateData => {
    //destructure page data by section
    const { employees, ...manager } = templateData;
    const fullName = manager.firstName + " " + manager.lastName;

    return `
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
                ${generateManager(manager)}
                ${generateCards(employees)}
            </div>
        </main>

        <footer class="container text-center py-3">
            <h3 class="text-dark">&copy; ${new Date().getFullYear()} by Chad Rotruck</h3>
        </footer>
    </body>
    </html>
    `;
};
//generate team section