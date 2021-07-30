import convertToRegExp from './convertToRegExp';

function isMatch(str: string, pat: string): boolean {
  if (!pat) {
    return false;
  }
  const regExpStr = '^' + convertToRegExp(pat) + '$';
  return new RegExp(regExpStr).test(str);
}

function matchPathGlob(path: string, pattern: string): boolean {
  try {
    if (pattern.length === 0) {
      return false;
    }

    const pathArr = path.split('/');
    const patternArr = pattern.split('/');
    let flag = false;
    let pIndex = 0;
    let globStarCount = 0;

    for (let i = 0; i < pathArr.length; i++) {
      const dir = pathArr[i];
      const pat = patternArr[pIndex];
      const isGlobStar = pat.match(/\*\*/);

      if (isMatch(dir, pat)) {
        flag = true;

        if (isGlobStar) {
          if (globStarCount === 0) {
            globStarCount++;
            continue;
          }

          if (globStarCount >= 1 && isMatch(dir, patternArr[pIndex + 1])) {
            pIndex++;
            globStarCount = 0;
          } else {
            globStarCount++;
            continue;
          }
        }

        pIndex++;
        continue;
      }

      return false;
    }

    return flag;
  } catch {
    return false;
  }
}

export default matchPathGlob;
