import { question01, question02 } from '../codes/02';

describe('question01 함수', () => {
  describe.each([
    {
      input: ['hello!', '1234567890', ''],
      output: false
    },
    {
      input: ['wally<wallys0213@gmail.com>', 'hihi&byebye<wow@wow.com>'],
      output: true
    },
    {
      input: [`What's your name?`, `console.log('1');`],
      output: true
    },
  ])('question01($input)', ({ input, output }) => {
    test(`returns ${output}`, () => {
      expect(question01(input)).toBe(output);
    });
  });
});

describe('question02 함수', () => {
  describe.each([
    {
      input: ['123&456', 'hello&bye<test@test.com>'],
      output: ['123&amp;456', 'hello&amp;bye<test@test.com>']
    },
    {
      input: ['!@#$%^&*', '&quot;wow&quot;', ''],
      output: ['!@#$%^&amp;*', '&amp;quot;wow&amp;quot;', '']
    },
  ])('question02($input)', ({ input, output }) => {
    test(`returns ${output}`, () => {
      expect(question02(input)).toEqual(output);
    });
  });
});