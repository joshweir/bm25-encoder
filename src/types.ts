import { object, string, number, boolean, InferType, array } from 'yup';

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

export const bm25EncoderSerializedSchema = object({
  b: number().required(),
  k1: number().required(),
  lowerCase: boolean().required(),
  removePunctuation: boolean().required(),
  removeStopwords: boolean().required(),
  nDocs: number().required(),
  avgdl: number().required(),
  docFreq: object({
    indices: array().of(number()).required(),
    values: array().of(number()).required(),
  }).required(),
});

export type BM25EncoderSerialized = InferType<typeof bm25EncoderSerializedSchema>;
