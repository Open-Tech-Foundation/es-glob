import convertToRegExp from './convertToRegExp';

function matchPathGlob(path: string, pattern: string): boolean {
  try {
    if (pattern.length === 0) {
      return false;
    }

    const pathArr = pattern.split('/');
    const pathRegExpArr = [];

    for (let i = 0; i < pathArr.length; i++) {
      pathRegExpArr.push(convertToRegExp(pathArr[i]));
    }

    const resultArr = [pathRegExpArr[0] + '\\/?'];

    for (let i = 1; i < pathRegExpArr.length; i++) {
      if (i === pathRegExpArr.length - 1) {
        resultArr.push(pathRegExpArr[i]);
      } else {
        resultArr.push(pathRegExpArr[i] + '?\\/?');
      }
    }
    const regExpStr = '^' + resultArr.join('') + '$';

    return new RegExp(regExpStr).test(path);
  } catch {
    return false;
  }
}

export default matchPathGlob;
