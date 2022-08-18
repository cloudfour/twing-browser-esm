# `twing-browser-esm`

This is the [Twing](https://gitlab.com/nightlycommit/twing) library ([Twig](https://twig.symfony.com/) templating in Node), but bundled as ESM for browser use. Twing already comes with a browser distribution, but it doesn't work in a browser without node globals and importing from node builtin modules. In other words, that browser bundle is really meant for webpack use.

This library is a pre-bundled version of Twing that works in the browser without requiring node dependencies or globals.

The npm version of this package should match the twing version it bundles.

```js
import {
  TwingEnvironment,
  TwingLoaderArray,
} from '@cloudfour/twing-browser-esm';
```

## Publish Workflow

1. Edit `package.json` `version` to match twing version if possible (try to avoid multiple releases of this package per twing release).
1. Run `npm i && npm run build`
1. Run `npm publish`
