module.exports = {
    productionSourceMap: false,
    // 默认情况下 babel-loader 会忽略所有 node_modules 中的文件。如果你想要通过 Babel 显式转译一个依赖，可以在这个选项中列出来。
    devServer: {
        open: true,
        port: 8008,
        proxy: {
            "/api": {
                target: "http://192.168.162.126:8083", //服务器地址
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    "^/api": ""
                }
            }
        }
    }
}