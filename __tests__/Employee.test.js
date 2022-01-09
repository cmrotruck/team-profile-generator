const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee('Chad', 'Rotruck', '456782', 'crotruck@gmail.com');

    expect(employee.firstName).toBe('Chad');
    expect(employee.lastName).toBe('Rotruck');
    expect(employee.id).toEqual(expect.any(String));
    expect(employee.email).toEqual(expect.any(String));
});

test('gets employee name', () => {
    const employee = new Employee('Chad', 'Rotruck', '456782', 'crotruck@gmail.com', '4564584');

    expect(employee.getName()).toBe('Chad Rotruck');
});

test('gets employee id', () => {
    const employee = new Employee('Chad', 'Rotruck', '456782', 'crotruck@gmail.com', '4564584');

    expect(employee.getId()).toBe('456782');
});

test('gets employee email', () => {
    const employee = new Employee('Chad', 'Rotruck', '456782', 'crotruck@gmail.com', '4564584');

    expect(employee.getEmail()).toBe('crotruck@gmail.com');
});

test('gets employee role', () => {
    const employee = new Employee('Chad', 'Rotruck', '456782', 'crotruck@gmail.com', '4564584');

    expect(employee.getRole()).toBe('employee');
});