[![Build Status](https://img.shields.io/travis/seek-oss/css-modules-typescript-loader/master.svg?style=flat-square)](http://travis-ci.org/seek-oss/css-modules-typescript-loader) [![npm](https://img.shields.io/npm/v/css-modules-typescript-loader.svg?style=flat-square)](https://www.npmjs.com/package/css-modules-typescript-loader) [![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square)](https://github.com/semantic-release/semantic-release) [![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=flat-square)](http://commitizen.github.io/cz-cli/)

# graphql-module-typescript-loader

[Webpack](https://webpack.js.org/) loader to create [TypeScript](https://www.typescriptlang.org/) declarations for [.graphql Modules].

Emits TypeScript declaration files matching your .graphql Modules in the same location as your source files, e.g. `src/query.graphql` will generate `src/query.graphql.d.ts`.

## Usage

Place `graphql-module-typescript-loader` directly after `graphql-tag/loader` in your webpack config.

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.(graphql|gql)$/,
        use: [
          {
            loader: 'graphql-module-typescript-loader',
          },
          {
            loader: 'graphql-tag/loader',
          }
        ]
      },
    ]
  }
};
```

## With Thanks

This package borrows heavily from [css-modules-typescript-loader](https://github.com/seek-oss/css-modules-typescript-loader).

## License

MIT.
