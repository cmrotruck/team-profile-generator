const Engineer = require('../lib/Engineer');

test('creates an engineer object', () => {
    const engineer = new Engineer('Chad', 'Rotruck', '456782', 'crotruck@gmail.com', 'cmrotruck');

    expect(engineer.firstName).toEqual(expect.any(String));
    expect(engineer.lastName).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(String));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.gitHub).toEqual(expect.any(String));
});

test('gets employees name', () => {
    const engineer = new Engineer('Chad', 'Rotruck', '456782', 'crotruck@gmail.com', 'cmrotruck');

    expect(engineer.firstName).toBe('Chad');
});

test('gets employees github', () => {
    const engineer = new Engineer('Chad', 'Rotruck', '456782', 'crotruck@gmail.com', 'cmrotruck');

    expect(engineer.getGitHub()).toBe('https://github.com/cmrotruck');
});

test('gets employees role', () => {
    const engineer = new Engineer('Chad', 'Rotruck', '456782', 'crotruck@gmail.com', 'cmrotruck');

    expect(engineer.getRole()).toBe('Engineer');
})