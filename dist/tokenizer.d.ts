import { Tokenizer as ITokenizer } from './types';
export declare class Tokenizer implements ITokenizer {
  private tokenizer;
  constructor();
  tokenize(document: string): string[];
}
