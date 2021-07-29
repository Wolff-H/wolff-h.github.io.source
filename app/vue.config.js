var path = require('path')

module.exports =
{
    // 基本路径
    publicPath: './',

    devServer:
    {
        proxy: 'http://www.ga3hu.com',
    },

    css:
    {
        loaderOptions:
        {
            stylus:
            {
                define:
                {
                    _colorset: path.resolve('src/assets/stylesheets/colorset/index.styl'),
                },
            },
        },
    },

    chainWebpack: (config) => {
        // pug loader //
        config.module
        .rule('pug')
            .test(/\.pug$/)
            .use('pug-html-loader')
                .loader('pug-html-loader')
                .end()
        // raw loader //
        config.module
        .rule('raw')
            .test(/\.md$/)
            .use('raw-loader')
                .loader('raw-loader')
                .end()
    },
}
