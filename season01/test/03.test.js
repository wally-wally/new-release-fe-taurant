import { question } from '../codes/03';

describe('question 함수', () => {
  describe.each([
    ['789', 3, '789.000'],
    ['789', 0, '789'],
    ['456.123', 1, '456.1'],
    ['123.456', 1, '123.4'],
    ['123.456', 3, '123.456'],
    ['123.456', 5, '123.45600'],
    ['123.456', 0, '123'],
    ['1234567890.12345', 0, '1234567890'],
    ['0', 0, '0'],
    ['0', 4, '0.0000'],
  ])('question(%s, %d)', (input1, input2, output) => {
    test(`returns ${output}`, () => {
      expect(question(input1, input2)).toBe(output);
    });
  });
});