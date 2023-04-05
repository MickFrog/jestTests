const calculator = require('./calculator');

test('Multiply my numbers', () => {
    expect(calculator.multiply(2, 4))
    .toBe(8);
});

test('Add my numbers', () => {
    expect(calculator.add(2, 4))
    .toBe(6);
});

test('Divide my numbers', () => {
    expect(calculator.divide(4, 2))
    .toBe(2);
});

test('Divide my numbers', () => {
    expect(calculator.divide(4, 0))
    .toBe(NaN);
});

test('Subtract my numbers', () => {
    expect(calculator.subtract(6, 2))
    .toBe(4);
});
