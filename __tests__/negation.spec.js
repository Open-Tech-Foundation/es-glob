import esGlob from '../lib/index.js';
import { readFileSync } from 'fs';

const negationJSON = JSON.parse(
  readFileSync(new URL('./negation.json', import.meta.url))
);

describe('esGlob', () => {
  test('negation', () => {
    for (const row of negationJSON) {
      expect(esGlob(row[0], row[1])).toBe(row[2]);
    }
  });
});
