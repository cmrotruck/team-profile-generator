class Employee {
    constructor(firstName, lastName, employeeId, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.id = employeeId;
        this.email = email;

    }

    getName(){
        return this.firstName + " " + this.lastName;
    };

    getId(){
        return this.id;
    };

    getEmail(){
        return this.email;
    };

    getRole(){
        return 'employee';
    };
};

module.exports = Employee;