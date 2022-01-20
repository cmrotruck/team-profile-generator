const Employee = require('../lib/Employee');

class Manager extends Employee{
    constructor(firstName, lastName, employeeId, email, phone){
        super(firstName, lastName, employeeId, email);

        this.phone = phone;
        this.employees = [];
    }

    getRole(){
        return 'Manager';
    }
}

module.exports = Manager;