import convertToRegExp from './convertToRegExp';

function esGlob(str: string, pattern: string): boolean {
  let flag = false;
  const negate = pattern[0] === '!';
  const regexStr = convertToRegExp(negate ? pattern.substring(1) : pattern);
  try {
    const regexp = new RegExp(regexStr);
    const result = regexp.exec(str);

    if (result) {
      flag = str.length === result[0].length;
    }

    return negate ? !flag : flag;
  } catch (error) {
    return false;
  }
}

export default esGlob;
