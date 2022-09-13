module.exports = {
    outputDir: 'D:\\Project\\android\\shop\\app\\src\\main\\assets\\dist',
    // publicPath: "./",
    devServer: {
        open: false,
        host: '0.0.0.0',
        port: 8080,
        https: false,
        disableHostCheck: true,
        proxy: {
            '/webApi': {
                target: 'http://localhost:9003/',
                ws: true,
                changOrigin: true,
                pathRewrite: {
                    '^/webApi': ''
                }
            },
            '/mobileApi': {
                target: 'http://10.0.2.2:9003',
                ws: true,
                changOrigin: true,
                pathRewrite: {
                    '^/mobileApi': ''
                }
            }
        }
    },
}
