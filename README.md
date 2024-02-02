
# is-a-discord-invite

[![npm package][npm-img]][npm-url]
[![Build Status][build-img]][build-url]
[![Downloads][downloads-img]][downloads-url]
[![Issues][issues-img]][issues-url]
[![Code Coverage][codecov-img]][codecov-url]
[![Commitizen Friendly][commitizen-img]][commitizen-url]
[![Semantic Release][semantic-release-img]][semantic-release-url]

> Check if a string is a Discord invite link

## Install

```bash
npm install is-a-discord-invite
```

## Usage

```ts
import { check } from 'is-a-discord-invite';

check('https://discord.gg/abc123');
//=> 'true'

check('https://discord.com/invite/abc123');
//=> 'true'

check('https://discordapp.com/invite/abc123');
//=> 'true'

check('https://discord.gg/abc123/invite');
//=> 'false'
```

## API

### check(input, options?)

#### input

Type: `string`

The string to check.

#### options

Type: `object`


[build-img]:https://github.com/kirathecomputer/is-a-discord-invite/actions/workflows/release.yml/badge.svg
[build-url]:https://github.com/kirathecomputer/is-a-discord-invite/actions/workflows/release.yml
[downloads-img]:https://img.shields.io/npm/dt/is-a-discord-invite
[downloads-url]:https://www.npmtrends.com/is-a-discord-invite
[npm-img]:https://img.shields.io/npm/v/is-a-discord-invite
[npm-url]:https://www.npmjs.com/package/is-a-discord-invite
[issues-img]:https://img.shields.io/github/issues/kirathecomputer/is-a-discord-invite
[issues-url]:https://github.com/kirathecomputer/is-a-discord-invite/issues
[codecov-img]:https://codecov.io/gh/kirathecomputer/is-a-discord-invite/branch/main/graph/badge.svg
[codecov-url]:https://codecov.io/gh/kirathecomputer/is-a-discord-invite
[semantic-release-img]:https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg
[semantic-release-url]:https://github.com/semantic-release/semantic-release
[commitizen-img]:https://img.shields.io/badge/commitizen-friendly-brightgreen.svg
[commitizen-url]:http://commitizen.github.io/cz-cli/
