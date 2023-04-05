const capitalize = require('./capitalize');

test('capitalizes first letter', () => {
    expect(capitalize('mulwana'))
    .toBe('Mulwana');
});