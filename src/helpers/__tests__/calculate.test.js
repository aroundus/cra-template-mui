import { add, divide, multiply, subtract } from '../calculate';

describe('add', () => {
  it.each([
    {
      received: { a: 1, b: 1 },
      expected: 2,
    },
    {
      received: { a: 2, b: 2 },
      expected: 4,
    },
  ])('$received.a + $received.b = $expected', ({ received, expected }) => {
    const actual = add(received.a, received.b);
    expect(actual).toBe(expected);
  });
});

describe('subtract', () => {
  it.each([
    {
      received: { a: 4, b: 2 },
      expected: 2,
    },
    {
      received: { a: 8, b: 4 },
      expected: 4,
    },
  ])('$received.a - $received.b = $expected', ({ received, expected }) => {
    const actual = subtract(received.a, received.b);
    expect(actual).toBe(expected);
  });
});

describe('multiply', () => {
  it.each([
    {
      received: { a: 4, b: 2 },
      expected: 8,
    },
    {
      received: { a: 8, b: 4 },
      expected: 32,
    },
  ])('$received.a * $received.b = $expected', ({ received, expected }) => {
    const actual = multiply(received.a, received.b);
    expect(actual).toBe(expected);
  });
});

describe('divide', () => {
  it.each([
    {
      received: { a: 4, b: 2 },
      expected: 2,
    },
    {
      received: { a: 8, b: 4 },
      expected: 2,
    },
  ])('$received.a / $received.b = $expected', ({ received, expected }) => {
    const actual = divide(received.a, received.b);
    expect(actual).toBe(expected);
  });

  it('0으로 나눌 수 없습니다.', () => {
    expect(() => divide(1, 0)).toThrow();
  });
});
