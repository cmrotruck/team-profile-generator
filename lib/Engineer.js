const Employee = require('./Employee');

class Engineer extends Employee{
    constructor(firstName, lastName, employeeId, email, phone, username){
        super(firstName, lastName, employeeId, email, phone, username);

        this.gitHub = username;
    }

    getGitHub(){
        return `https://github.com/${this.gitHub}`
    };

    getRole(){
        return 'Engineer';
    };
};

module.exports = Engineer;