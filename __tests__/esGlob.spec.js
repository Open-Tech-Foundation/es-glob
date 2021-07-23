import esGlob from '../lib/index.js';

describe('esGlob', () => {
  test('index', () => {
    expect(esGlob()).toMatch(/Hello World!/);
  });
});
