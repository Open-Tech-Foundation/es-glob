import esGlob from '../lib/index.js';
import { readFileSync } from 'fs';

const globStarJSON = JSON.parse(
  readFileSync(new URL('./globStar.json', import.meta.url))
);

describe('esGlob', () => {
  test('globStar', () => {
    for (const row of globStarJSON) {
      expect(esGlob(row[0], row[1])).toBe(row[2]);
    }
  });
});
