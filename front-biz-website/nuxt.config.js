
export default {
    mode: 'universal',
    /*
  ** Headers of the page
  */
    head: {
        title: process.env.npm_package_name || '',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
            {
                hid: 'keywords',
                name: 'keywords',
                content: '玩吧，北京默契破冰科技有限公司，玩吧官网，默契破冰官方网站，玩吧 APP，玩吧官方网站，玩吧小游戏，玩吧谁是卧底，玩吧你画我猜，玩吧狼人杀，玩吧阿瓦隆，决战阿瓦隆，双人游戏，谁是卧底，你画我猜'
            }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },

    router: {
        linkActiveClass: 'active-link'
    },

    /*
  ** Customize the progress-bar color
  */
    loading: { color: '#fff' },
    /*
  ** Global CSS
  */
    css: [
        '~assets/scss/main.scss'
    ],
    /*
  ** Plugins to load before mounting the App
  */
    plugins: [
        '~plugins/vue-lazyload',
        '~plugins/stylelint'
    ],
    /*
  ** Nuxt.js dev-modules
  */
    buildModules: [
    ],
    /*
  ** Nuxt.js modules
  */
    modules: [
        '@nuxtjs/axios',
        '@nuxtjs/proxy'
    ],
    /*
  ** Build configuration
  */
    build: {
    /*
    ** You can extend webpack config here
    */
        extend(config, ctx) {
            // eslint
            if (ctx.isDev && ctx.isClient) {
                config.module.rules.push(
                    {
                        enforce: 'pre',
                        test: /\.(js|vue)$/,
                        loader: 'eslint-loader',
                        exclude: /(node_modules)/,
                        options: {
                            configFile: './.eslintrc.js',
                            fix: true
                        }
                    },
                );
            }
        }
    }
};
