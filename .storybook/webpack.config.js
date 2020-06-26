const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = ({ config }) => {
  // adding react-docgen-typescript-loader in loader to allow for props parsing and integration in storybook
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [require.resolve("babel-loader"), require.resolve("react-docgen-typescript-loader")]
  });
  config.resolve.extensions.push(".ts", ".tsx");

  config.plugins.push(
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, './../static'),
          to: './static'
        }
      ]
    })
  );

  return config;
};
