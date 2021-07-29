<div align="center">

# @open-tech-world/es-glob
[![Build](https://github.com/open-tech-world/es-glob/actions/workflows/build.yml/badge.svg)](https://github.com/open-tech-world/es-glob/actions/workflows/build.yml) [![CodeFactor](https://www.codefactor.io/repository/github/open-tech-world/es-glob/badge)](https://www.codefactor.io/repository/github/open-tech-world/es-glob)
</div>

> A [glob](https://en.wikipedia.org/wiki/Glob_(programming)) pattern matching library.

## Supported glob patterns

#### Basic

✔️ `*` (Wildcard)

✔️ `**` (Globstar)

✔️ `?` (Wildcard)

✔️ `[…]` (Brackets)

✔️ `\\` (Escape Special Characters)

✔️ `!` (Negation)

#### Braces

🚧 `{,}` (Brace Matching)

#### Extended glob

❌ `?(pattern-list)`

❌ `*(pattern-list)`

❌ `+(pattern-list)`

❌ `@(pattern-list)`

❌ `!(pattern-list)`

#### POSIX Character classes

❌ `[:class:]`

#### Others

❌ Regular expression

✔️ `(|)` Logical OR Group

## Installation

Using npm

```shell
npm install @open-tech-world/es-glob
```

Using Yarn

```shell
yarn add @open-tech-world/es-glob
```

## Usage

```ts
import { matchGlob } from '@open-tech-world/es-glob';

matchGlob(str: string, pattern: string): boolean;
```

## Examples

```ts
matchGlob('/a.json', '/*.json') // true

matchGlob('a/b/.x/c/d', '**/.x/**') // true

matchGlob('abc', 'ab?') // true

matchGlob('b', '[a-c]') // true

matchGlob('a', '[!a-c]') // false

matchGlob('b', '[^a-c]') // false

matchGlob('*.txt', '\\*.txt') // true

matchGlob('node_modules', '!node_modules') // false

matchGlob('a', '(a|b)') // true

matchGlob('config.js', '*.(js|json)') // true

matchGlob('tsconfig.json', '*.(js|json)') // true

matchGlob('index.ts', '*.(js|jsx|tsx)') // false
```

#### matchPathGlob

It matches a path in a glob pattern.

```ts
import { matchPathGlob } from '@open-tech-world/es-glob';

matchPathGlob('a', 'a/*') // true
matchPathGlob('a/b', 'a/*') // true
matchPathGlob('a/b/c', 'a/*') // false
```

## References

https://www.gnu.org/software/bash/manual/html_node/Pattern-Matching.html

https://en.wikipedia.org/wiki/Glob_(programming)

## License

Copyright (c) 2021, [Thanga Ganapathy](https://thanga-ganapathy.github.io) ([MIT License](./LICENSE)).
