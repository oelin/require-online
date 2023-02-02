# require-online
Install node packages when required.


## Installation

```sh
npm i require-online
```

## Usage

`require-online` can be used as a drop-in replacement for regular `require`. In fact, for packages that're already installed calliing, `require-online.require` is identical to calling `require`. For packages which aren't installed, `require-online` first installs them using `npm`, `pnpm` or `yarn`, and then returns the package as normal.

```js
const $require = require('require-online')

const express = await $require('express') // Will install express if needed.
```
