import { readFileSync, writeFileSync } from 'fs';
import {
  BM25EncoderConstructorProps,
  BM25EncoderProps,
  BM25EncoderSerialized,
  bm25EncoderSerializedSchema,
} from './types';
import { Tokenizer } from './tokenizer';
import { mm3 } from './mm3';
import { getStopwords } from './stopwords';
import { getPunctuation } from './punctuation';

export class BM25Encoder {
  private props: BM25EncoderProps;
  private stopwords: string[];
  private punctuation: string[];

  constructor(props?: BM25EncoderConstructorProps) {
    this.props = {
      b: props?.b ?? 0.75,
      k1: props?.k1 ?? 1.2,
      lowerCase: props?.lowerCase ?? true,
      removePunctuation: props?.removePunctuation ?? true,
      removeStopwords: props?.removeStopwords ?? true,
      tokenizer: props?.tokenizer ?? new Tokenizer(),
      docFreq: {},
      nDocs: 0,
      avgdl: 0,
    };
    this.stopwords = getStopwords();
    this.punctuation = getPunctuation();
  }

  fit(corpus: string[]): BM25Encoder {
    let nDocs = 0;
    let sumDocLen = 0;
    const docFreqCounter: { [token: string]: number } = {};

    for (const doc of corpus) {
      if (typeof doc !== 'string') {
        throw new Error('corpus must be a list of strings');
      }

      const { indices, tf } = this.tf(doc);
      if (indices.length === 0) {
        continue;
      }
      nDocs += 1;
      sumDocLen += tf.reduce((sum, freq) => sum + freq, 0);

      // Count the number of documents that contain each token
      for (const index of indices) {
        docFreqCounter[index] = (docFreqCounter[index] || 0) + 1;
      }
    }

    this.props.docFreq = docFreqCounter;
    this.props.nDocs = nDocs;
    this.props.avgdl = sumDocLen / nDocs;
    return this;
  }

  encode(input: string): { indices: number[]; values: number[] } {
    if (!Object.keys(this.props.docFreq).length || !this.props.nDocs || !this.props.avgdl) {
      throw new Error('BM25Encoder has not been fitted yet');
    }

    const { indices, tf: docTf } = this.tf(input);
    const tf = [...docTf];
    const tfSum = tf.reduce((sum, freq) => sum + freq, 0);
    const tfNormed = tf.map(
      (t) => t / (this.props.k1 * (1.0 - this.props.b + this.props.b * (tfSum / this.props.avgdl)) + t),
    );

    return {
      indices,
      values: tfNormed,
    };
  }

  encodeQuery(input: string): { indices: number[]; values: number[] } {
    if (!Object.keys(this.props.docFreq).length || !this.props.nDocs || !this.props.avgdl) {
      throw new Error('BM25Encoder has not been fitted yet');
    }

    const { indices, tf: queryTf } = this.tf(input);

    const df = indices.map((idx) => this.props.docFreq[idx] || 1);
    const idf = df.map((d) => Math.log((this.props.nDocs + 1) / (d + 0.5)));
    const idfSum = idf.reduce((sum, val) => sum + val, 0);
    const idfNorm = idf.map((val) => val / idfSum);

    return {
      indices,
      values: idfNorm,
    };
  }

  dump(path: string) {
    writeFileSync(path, JSON.stringify(this.getParams()));
  }

  load(path: string) {
    this.setParams(bm25EncoderSerializedSchema.validateSync(JSON.parse(readFileSync(path, 'utf-8'))));
  }

  getParams(): BM25EncoderSerialized {
    if (!Object.keys(this.props.docFreq).length || !this.props.nDocs || !this.props.avgdl) {
      throw new Error('BM25Encoder has not been fitted yet');
    }

    const { tokenizer: _, ...propsExclTokenizer } = this.props;

    return {
      ...propsExclTokenizer,
      docFreq: {
        indices: Object.keys(this.props.docFreq).map(Number),
        values: Object.values(this.props.docFreq),
      },
    };
  }

  setParams(props: BM25EncoderSerialized): BM25Encoder {
    this.props = {
      ...this.props,
      ...props,
    };
    return this;
  }

  private tf(text: string): { indices: number[]; tf: number[] } {
    const counts: { [token: number]: number } = {};
    const tokens = this.props.tokenizer
      .tokenize(this.props.lowerCase ? text.toLocaleLowerCase() : text)
      .filter((token) => (this.props.removeStopwords ? !this.stopwords.includes(token) : true))
      .filter((token) => (this.props.removePunctuation ? !this.punctuation.includes(token) : true));

    for (const token of tokens) {
      const hashedToken = this.hashText(token);
      counts[hashedToken] = (counts[hashedToken] || 0) + 1;
    }

    const items = Object.entries(counts);
    const indices = items.map(([idx]) => parseInt(idx, 10));
    const tf = Object.values(counts);

    return { indices, tf };
  }

  private hashText(token: string): number {
    return mm3(token);
  }
}
