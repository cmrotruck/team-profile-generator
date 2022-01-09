const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');

function StartApplication(){
    console.log('Application Started');
    //prompt user for team managers name, employee id, email address, and office number.

    //present a menu with the option to add an engineer or an intern or to finish building my team

    //when selecting the enegineer option, prompt user to enter engineer's name, id, email, and github username. Then
    //return to menu

    //when selecting the intern option, prompt user to enter interns's name, id, email, and school. Then
    //return to menu

    //when selecting finish building team, generate HTML and exit application
};

StartApplication();