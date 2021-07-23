<div align="center">

# @open-tech-world/es-glob

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
import esGlob from '@open-tech-world/es-glob';

esGlob(str: string, pattern: string): boolean;
```

## Examples

```ts
esGlob('/a.json', '/*.json') // true

esGlob('a/b/.x/c/d', '**/.x/**') // true

esGlob('abc', 'ab?') // true

esGlob('b', '[a-c]') // true

esGlob('a', '[!a-c]') // false

esGlob('b', '[^a-c]') // false

esGlob('*.txt', '\\*.txt') // true

esGlob('node_modules', '!node_modules') // false
```

## References

https://www.gnu.org/software/bash/manual/html_node/Pattern-Matching.html

https://en.wikipedia.org/wiki/Glob_(programming)

## License

Copyright (c) 2021, [Thanga Ganapathy](https://thanga-ganapathy.github.io) ([MIT License](./LICENSE)).
