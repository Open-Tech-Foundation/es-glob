import esGlob from '../lib/index.js';
import { readFileSync } from 'fs';

const roundBracketsJSON = JSON.parse(
  readFileSync(new URL('./roundBrackets.json', import.meta.url))
);

describe('esGlob', () => {
  test('roundBrackets', () => {
    for (const row of roundBracketsJSON) {
      expect(esGlob(row[0], row[1])).toBe(row[2]);
    }
  });
});
