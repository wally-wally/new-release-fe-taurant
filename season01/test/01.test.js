import { checkAvailableRegisterReceiveRule } from '../codes/01';

describe('checkAvailableRegisterReceiveRule 함수', () => {
  describe.each([
    [1, 'available'],
    [2, 'available'],
    [3, 'unavailable'],
    [4, 'available'],
    [5, 'available'],
    [6, 'unavailable'],
    [7, 'unavailable'],
  ])('checkAvailableRegisterReceiveRule(%d)', (input, output) => {
    test(`returns ${output}`, () => {
      expect(checkAvailableRegisterReceiveRule(input)).toBe(output);
    });
  });
});