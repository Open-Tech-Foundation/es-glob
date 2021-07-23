import esGlob from '../lib/index.js';
import { readFileSync } from 'fs';

const questionMarkJSON = JSON.parse(
  readFileSync(new URL('./questionMark.json', import.meta.url))
);

describe('esGlob', () => {
  test('questionMark', () => {
    for (const row of questionMarkJSON) {
      expect(esGlob(row[0], row[1])).toBe(row[2]);
    }
  });
});
