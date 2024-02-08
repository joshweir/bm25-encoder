import { Tokenizer as ITokenizer } from './types';
// tslint:disable-next-line:import-name
import WinkTokenizer from 'wink-tokenizer';

export class Tokenizer implements ITokenizer {
  private tokenizer: WinkTokenizer;

  constructor() {
    this.tokenizer = new WinkTokenizer();
  }

  tokenize(document: string): string[] {
    return this.tokenizer.tokenize(document).map(({ value }) => value);
  }
}
