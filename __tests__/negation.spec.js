import { matchGlob } from '../lib/index.esm.js';
import { readFileSync } from 'fs';

const negationJSON = JSON.parse(
  readFileSync(new URL('./negation.json', import.meta.url))
);

describe('esGlob', () => {
  test('negation', () => {
    for (const row of negationJSON) {
      expect(matchGlob(row[0], row[1])).toBe(row[2]);
    }
  });
});
