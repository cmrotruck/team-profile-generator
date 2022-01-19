const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
const generatePage = require('./src/page-template.js');

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'firstName',
            message: 'Please enter your first name: '
        },
        {
            type: 'input',
            name: 'lastName',
            message: 'Please enter your last name: '
        },
        {
            type: 'input',
            name: 'id',
            message: 'Please enter your employee id: '
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter your email address: '
        },
        {
            type: 'input',
            name: 'phone',
            message: 'Please enter your office phone number: '
        }
    ]);
};

const generateHTML = teamData =>{
    console.log(teamData);
}

async function LoadMenu(teamData) {
    // If there's no 'employees' array property, create one
    if (!teamData.employees) {
        teamData.employees = [];
    }
    return await inquirer.prompt([
        {
            type: 'list',
            name: 'type',
            messages: 'Add employee?',
            choices: ['Add an Engineer', 'Add an Intern', 'I am finished building my team']
        }
    ])
        .then(({ type }) => {
            switch (type) {
                case 'Add an Engineer':
                    //when selecting the enegineer option, prompt user to enter engineer's name, id, email, and github username. Then
                    //return to menu
                    //console.log('Adding Engineer');
                    await inquirer.prompt([
                        {
                            type: 'input',
                            name: 'firstName',
                            message: `Please enter first name: `
                        },
                        {
                            type: 'input',
                            name: 'lastName',
                            message: `Please enter last name: `
                        },
                        {
                            type: 'input',
                            name: 'id',
                            message: `Please enter employee id: `
                        },
                        {
                            type: 'input',
                            name: 'email',
                            message: `Please enter email address: `
                        },
                        {
                            type: 'input',
                            name: 'github',
                            message: `Please enter github username: `
                        }
                    ])
                        .then((employee) => {
                            employee.type = 'Engineer';
                            teamData.employees.push(employee);
                            LoadMenu(teamData);
                            //console.log(teamData);
                        })
                    break;
                case 'Add an Intern':
                    //when selecting the intern option, prompt user to enter interns's name, id, email, and school. Then
                    //return to menu
                    console.log('Adding Intern');
                    await inquirer.prompt([
                        {
                            type: 'input',
                            name: 'firstName',
                            message: `Please enter intern's first name: `
                        },
                        {
                            type: 'input',
                            name: 'lastName',
                            message: `Please enter intern's last name: `
                        },
                        {
                            type: 'input',
                            name: 'id',
                            message: `Please enter intern's employee id: `
                        },
                        {
                            type: 'input',
                            name: 'email',
                            message: `Please enter intern's email address: `
                        },
                        {
                            type: 'input',
                            name: 'school',
                            message: `Please enter intern's school: `
                        }
                    ])
                        .then((employee) => {
                            employee.type = 'Intern';
                            teamData.employees.push(employee);
                            LoadMenu(teamData);
                            //console.log(teamData);
                        })
                    break;
                default:
                    //finished building team
                    console.log(teamData);
                    const page = generatePage(teamData);
                    console.log(page);
                    
            }
        })

};

function StartApplication() {
    console.log('Application Started');
    //prompt user for team managers name, employee id, email address, and office number.
    promptUser()
        //present a menu with the option to add an engineer or an intern or to finish building my team 
        .then(function (teamData) {
            teamData = LoadMenu(teamData);
            console.log('teamData = ' + teamData);
        });
};

StartApplication();