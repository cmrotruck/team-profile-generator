const Employee = require('./Employee');

class Engineer extends Employee{
    constructor(firstName, lastName, employeeId, email, gitHub){
        super(firstName, lastName, employeeId, email);

        this.gitHub = gitHub;
    }

    getGitHub(){
        return `https://github.com/${this.gitHub}`
    };

    getRole(){
        return 'Engineer';
    };
};

module.exports = Engineer;