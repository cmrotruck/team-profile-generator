const Employee = require('../lib/Employee');

class Intern extends Employee{
    constructor(firstName, lastName, employeeId, email, school){
        super(firstName, lastName, employeeId, email);

        this.school = school;
    }

    getSchool(){
        return this.school;
    };

    getRole(){
        return 'Intern';
    }
}

module.exports = Intern;