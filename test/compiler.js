const path = require("path");
const webpack = require("webpack");
const memoryfs = require("memory-fs");

module.exports = ({ entry, options }) => {
  const compiler = webpack({
    entry,
    output: {
      path: path.dirname(entry),
      filename: "bundle.js"
    },
    module: {
      rules: [
        {
          test: /\.(graphql|gql)$/,
          use: [
            {
              loader: require.resolve("../index.js")
            },
            {
              loader: "graphql-tag/loader"
            }
          ]
        }
      ]
    }
  });

  compiler.outputFileSystem = new memoryfs();

  return new Promise((resolve, reject) => {
    compiler.run((err, stats) => {
      if (err || stats.hasErrors()) {
        reject({
          failed: true,
          errors: err || stats.toJson().errors
        });
      }

      resolve(stats);
    });
  });
};
