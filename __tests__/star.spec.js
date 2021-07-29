import { matchGlob } from '../lib/index.js';
import { readFileSync } from 'fs';

const starJSON = JSON.parse(
  readFileSync(new URL('./star.json', import.meta.url))
);

describe('esGlob', () => {
  test('star', () => {
    for (const row of starJSON) {
      expect(matchGlob(row[0], row[1])).toBe(row[2]);
    }
  });
});
