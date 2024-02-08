import { mm3 } from './mm3';

describe('mm3', () => {
  it('should return the expected output when given a valid string input', () => {
    const input = 'hello';
    const expectedOutput = 613153351;
    const actualOutput = mm3(input);
    expect(actualOutput).toBe(expectedOutput);
  });

  it('should return the same output for the same input', () => {
    const input = 'hello';
    const expectedOutput = mm3(input);
    const actualOutput = mm3(input);
    expect(actualOutput).toBe(expectedOutput);
  });

  it('should handle empty string input correctly', () => {
    const input = '';
    const expectedOutput = 0;
    const actualOutput = mm3(input);
    expect(actualOutput).toBe(expectedOutput);
  });

  it('should handle input with maximum length correctly', () => {
    const input = 'a'.repeat(255);
    const expectedOutput = 231365789;
    const actualOutput = mm3(input);
    expect(actualOutput).toBe(expectedOutput);
  });

  it('should handle input with minimum length correctly', () => {
    const input = 'a';
    const expectedOutput = 1009084850;
    const actualOutput = mm3(input);
    expect(actualOutput).toBe(expectedOutput);
  });

  it('should throw an error when given a null input', () => {
    const input = null;
    expect(() => mm3(input as any)).toThrow();
  });
});
