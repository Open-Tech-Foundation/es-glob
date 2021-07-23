import matchBracket from './matchBracket';

function convertToRegExp(pattern: string): string {
  let regexStr = '';
  const charMap: Record<string, string> = {
    '/': '\\/',
    '*': '[^/]*',
    '**': '(.*)',
    '.': '\\.',
    '?': '[^/]',
  };

  for (let i = 0; i < pattern.length; i++) {
    if (pattern[i] === '*' && pattern[i + 1] === '*') {
      regexStr += charMap['**'];
      i += 1;
      continue;
    }

    if (pattern[i] === '\\') {
      regexStr += '\\' + pattern[i + 1];
      i += 1;
      continue;
    }

    if (pattern[i] === '[') {
      const bracketStr = matchBracket(pattern, i);
      regexStr += bracketStr;
      i += bracketStr.length - 1;
      continue;
    }

    if (charMap[pattern[i]]) {
      regexStr += charMap[pattern[i]];
    } else if (pattern[i].match(/[a-zA-Z]/)) {
      regexStr += pattern[i];
    }
  }

  return regexStr;
}

export default convertToRegExp;
