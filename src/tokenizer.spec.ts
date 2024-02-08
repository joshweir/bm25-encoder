import { Tokenizer } from './tokenizer';

describe('Tokenizer', () => {
  it('should tokenize a simple document with one sentence', () => {
    const tokenizer = new Tokenizer();
    const document = 'This is a simple sentence.';
    const expectedTokens = ['This', 'is', 'a', 'simple', 'sentence', '.'];

    const tokens = tokenizer.tokenize(document);

    expect(tokens).toEqual(expectedTokens);
  });

  it('should tokenize a document with multiple sentences', () => {
    const tokenizer = new Tokenizer();
    const document = 'This is the first sentence. This is the second sentence.';
    const expectedTokens = [
      'This',
      'is',
      'the',
      'first',
      'sentence',
      '.',
      'This',
      'is',
      'the',
      'second',
      'sentence',
      '.',
    ];

    const tokens = tokenizer.tokenize(document);

    expect(tokens).toEqual(expectedTokens);
  });

  it('should tokenize a document with special characters', () => {
    const tokenizer = new Tokenizer();
    const document = 'This is a document with special characters: !@#$%^&*()';
    const expectedTokens = [
      'This',
      'is',
      'a',
      'document',
      'with',
      'special',
      'characters',
      ':',
      '!',
      '@',
      '#',
      '$',
      '%',
      '^',
      '&',
      '*',
      '(',
      ')',
    ];

    const tokens = tokenizer.tokenize(document);

    expect(tokens).toEqual(expectedTokens);
  });

  it('should tokenize an empty document', () => {
    const tokenizer = new Tokenizer();
    const document = '';
    const expectedTokens: string[] = [];

    const tokens = tokenizer.tokenize(document);

    expect(tokens).toEqual(expectedTokens);
  });

  it('should tokenize a document with only white spaces', () => {
    const tokenizer = new Tokenizer();
    const document = '     ';
    const expectedTokens: string[] = [];

    const tokens = tokenizer.tokenize(document);

    expect(tokens).toEqual(expectedTokens);
  });

  it('should tokenize a document with one word', () => {
    const tokenizer = new Tokenizer();
    const document = 'Hello';
    const expectedTokens = ['Hello'];

    const tokens = tokenizer.tokenize(document);

    expect(tokens).toEqual(expectedTokens);
  });
});
