import convertToRegExp from './convertToRegExp';

function matchRoundBracket(str: string, pos: number): [string, number] {
  let regExpStr = '';
  let endPos = -1;
  let count = 0;

  for (let i = pos + 1; i < str.length; i++) {
    if (str[i] === '(') {
      const [tempStr, tempCount] = matchRoundBracket(str.substring(i), 0);
      regExpStr += tempStr;
      i += tempCount;
      count += tempCount;
      count++;
      continue;
    }

    if (str[i] === ')') {
      endPos = i;
      count++;
      break;
    }

    regExpStr += convertToRegExp(str[i]);
    count++;
  }

  if (endPos === -1) {
    throw new Error();
  }

  return ['(?:' + regExpStr + ')', count];
}

export default matchRoundBracket;
