import mm from 'micromatch';
import esGlob from './lib/index.js';

// Change files & pattern here and run `node benchmark.js`
const files = ['src', 'a', 'src/index.ts'];
console.log();
console.log('Files:');
console.log(files);
console.log();
const pattern = 'src/**';
console.log('Pattern:', pattern);
console.log();

console.time('Micromatch');
const result = mm(files, pattern);
console.timeEnd('Micromatch');
console.log(result);

console.log();

console.time('esGlob');
const esGlobResult = files.map((f) => esGlob(f, pattern));
console.timeEnd('esGlob');
console.log(esGlobResult);
