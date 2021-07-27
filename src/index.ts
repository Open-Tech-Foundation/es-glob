import convertToRegExp from './convertToRegExp';

function esGlob(str: string, pattern: string): boolean {
  let flag = false;
  const negate = pattern[0] === '!';

  try {
    const regExpStr = convertToRegExp(negate ? pattern.substring(1) : pattern);
    const regExp = new RegExp('^' + regExpStr + '$');
    flag = regExp.test(str);

    return negate ? !flag : flag;
  } catch (error) {
    return false;
  }
}

export default esGlob;
