const StyleLintPlugin = require('stylelint-webpack-plugin');

export default () => {
    new StyleLintPlugin({
        files: ['**/*.{vue,htm,html,css,sss,less,scss,sass}'],
        fix: true
    });
};
