const Manager = require('../lib/Manager');

test('create a manager object', () => {
    const manager = new Manager('Chad', 'Rotruck', '456782', 'crotruck@gmail.com', '4564584');

    expect(manager.firstName).toBe('Chad');
    expect(manager.lastName).toBe('Rotruck');
    expect(manager.phone).toEqual(expect.any(String));
});

test('get employees role', () => {
    const manager = new Manager('Chad', 'Rotruck', '456782', 'crotruck@gmail.com', '4564584');

    expect(manager.getRole()).toBe('Manager');
})