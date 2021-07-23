function matchBracket(str: string, pos: number): string {
  let result = '[';
  for (let i = pos + 1; i < str.length; i++) {
    if (str[i] === '!') {
      result += '^';
      continue;
    }
    if (str[i] === ']') {
      result += ']';
      break;
    }
    result += str[i];
  }

  return result;
}

export default matchBracket;
