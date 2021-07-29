import { matchGlob } from '../lib/index.js';
import { readFileSync } from 'fs';

const bracketsJSON = JSON.parse(
  readFileSync(new URL('./brackets.json', import.meta.url))
);

describe('esGlob', () => {
  test('brackets', () => {
    for (const row of bracketsJSON) {
      expect(matchGlob(row[0], row[1])).toBe(row[2]);
    }
  });
});
