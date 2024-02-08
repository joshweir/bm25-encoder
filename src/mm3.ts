import { murmur3 } from 'murmurhash-js';

export const mm3 = (key: string) => murmur3(key);
