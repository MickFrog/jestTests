const caesarCipher = require('./caesar');

test('Correct Kalooli cipher', () => {
    expect(caesarCipher.encrypt('Kalooli', 1))
    .toBe('Lbmppmj');
});

test('Correct sayno cipher', () => {
    expect(caesarCipher.encrypt('sayno', 3))
    .toBe('vdbqr');
});

test('Correct sayno decipher', () => {
    expect(caesarCipher.decrypt('vdbqr', 3))
    .toBe('sayno');
});

test('Correct Kalooli decipher', () => {
    expect(caesarCipher.decrypt('Lbmppmj', 1))
    .toBe('Kalooli');
});
