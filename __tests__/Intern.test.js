const Intern = require('../lib/Intern');

test('create an intern object', () => { 
    const intern = new Intern('Chad', 'Rotruck', '456782', 'crotruck@gmail.com', "Ohio State University");

    expect(intern.firstName).toBe('Chad');
    expect(intern.lastName).toBe('Rotruck');
    expect(intern.school).toEqual(expect.any(String));
});

test('gets intern school', () => {
    const intern = new Intern('Chad', 'Rotruck', '456782', 'crotruck@gmail.com', '4564584', "Ohio State University");

    expect(intern.getSchool()).toEqual(expect.any(String));
});

test('gets employee role', () => {
    const intern = new Intern('Chad', 'Rotruck', '456782', 'crotruck@gmail.com', '4564584', "Ohio State University");

    expect(intern.getRole()).toBe('Intern');
});