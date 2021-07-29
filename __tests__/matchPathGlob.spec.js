import { matchPathGlob } from '../lib/index.js';

describe('matchPathGlob', () => {
  it('does not match', () => {
    expect(matchPathGlob()).toBeFalsy();
    expect(matchPathGlob('', '')).toBeFalsy();
    expect(matchPathGlob('a', '')).toBeFalsy();
    expect(matchPathGlob('a', 'b')).toBeFalsy();
    expect(matchPathGlob('a/b', 'ab')).toBeFalsy();
    expect(matchPathGlob('a/b', 'ab')).toBeFalsy();
    expect(matchPathGlob('a/b', 'a/a')).toBeFalsy();
    expect(matchPathGlob('a/b/c', 'a/*')).toBeFalsy();
    expect(matchPathGlob('b/a', 'a/*')).toBeFalsy();
    expect(matchPathGlob('b/a/c', 'a/*')).toBeFalsy();
    expect(matchPathGlob('a/b/c/e', 'a/**/d')).toBeFalsy();
  });

  it('does match', () => {
    expect(matchPathGlob('a', 'a')).toBeTruthy();
    expect(matchPathGlob('abc', 'abc')).toBeTruthy();
    expect(matchPathGlob('a/b', 'a/b')).toBeTruthy();
    expect(matchPathGlob('a/a', 'a/*')).toBeTruthy();
    expect(matchPathGlob('a/b', 'a/*')).toBeTruthy();
    expect(matchPathGlob('a/b', 'a/*/*')).toBeTruthy();
    expect(matchPathGlob('a/b/c', 'a/*/*')).toBeTruthy();
    expect(matchPathGlob('a/b/c', 'a/b/*')).toBeTruthy();
    expect(matchPathGlob('a/b/c/d', 'a/**/d')).toBeTruthy();
    expect(matchPathGlob('a/b/c/d', 'a/?/*/d')).toBeTruthy();
  });
});
