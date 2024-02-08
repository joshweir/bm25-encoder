import { BM25EncoderConstructorProps, BM25EncoderSerialized } from './types';
export declare class BM25Encoder {
  private props;
  private stopwords;
  private punctuation;
  constructor(props?: BM25EncoderConstructorProps);
  fit(corpus: string[]): BM25Encoder;
  encode(input: string): {
    indices: number[];
    values: number[];
  };
  encodeQuery(input: string): {
    indices: number[];
    values: number[];
  };
  dump(path: string): void;
  load(path: string): void;
  getParams(): BM25EncoderSerialized;
  setParams(props: BM25EncoderSerialized): BM25Encoder;
  private tf;
  private hashText;
}
