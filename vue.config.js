const {defineConfig} = require('@vue/cli-service')

module.exports = defineConfig({
    transpileDependencies: true,
    publicPath:'/TGM3_Audience_Dashboard_Web/',
    pages:{
        index:{
            entry:'src/main.js',
            template:'public/index.html',
            filename:'index.html',
            title:'index',
            chunks: ['chunk-vendors', 'chunk-common', 'index']
        },
        chat:{
            entry:'src/js/chat.js',
            template:'public/index.html',
            filename:'chat.html',
            title:'你是鬼吧',
            chunks: ['chunk-vendors', 'chunk-common', 'chat']
        }
        

    }
})
