const CopyPlugin = require('copy-webpack-plugin');

module.exports = new CopyPlugin({
    patterns: [{ from: 'static', to: '' }] // The `to` path already starts at `dist`. Anything added to the `to` value will be subfolders inside `dist`
});
