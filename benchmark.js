import mm from 'micromatch';
import esGlob from './lib/index.js';

// Change files & pattern here and run `node benchmark.js`
const files = ['src', 'src/index.ts'];
const pat = 'src/**';

console.time('Micromatch');
const result = mm(files, pat);
console.timeEnd('Micromatch');
console.log(result);

console.time('esGlob');
files.forEach((f) => {
  console.log(esGlob(f, pat));
});
console.timeEnd('esGlob');
