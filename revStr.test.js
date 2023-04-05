const reverseString = require('./revStr');

test('Reverse my word', () => {
    expect(reverseString('Kalooli'))
    .toBe('iloolaK');
});