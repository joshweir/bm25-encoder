import { InferType } from 'yup';
export interface Tokenizer {
  tokenize(document: string): string[];
}
export type BM25EncoderConstructorProps = {
  b: number;
  k1: number;
  lowerCase: boolean;
  removePunctuation: boolean;
  removeStopwords: boolean;
  tokenizer: Tokenizer;
};
export type BM25Data = {
  docFreq: Record<number, number>;
  nDocs: number;
  avgdl: number;
};
export type BM25EncoderProps = Required<BM25EncoderConstructorProps> & BM25Data;
export declare const bm25EncoderSerializedSchema: import('yup').ObjectSchema<
  {
    b: number;
    k1: number;
    lowerCase: NonNullable<boolean | undefined>;
    removePunctuation: NonNullable<boolean | undefined>;
    removeStopwords: NonNullable<boolean | undefined>;
    nDocs: number;
    avgdl: number;
    docFreq: {
      values: (number | undefined)[];
      indices: (number | undefined)[];
    };
  },
  import('yup').AnyObject,
  {
    b: undefined;
    k1: undefined;
    lowerCase: undefined;
    removePunctuation: undefined;
    removeStopwords: undefined;
    nDocs: undefined;
    avgdl: undefined;
    docFreq: {
      indices: '';
      values: '';
    };
  },
  ''
>;
export type BM25EncoderSerialized = InferType<typeof bm25EncoderSerializedSchema>;
