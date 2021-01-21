module.exports = {
    productionSourceMap: false,
    devServer: {
      // port: 666,
      https: false,
      //以上的ip和端口是我们本机的;下面为需要跨域的
      proxy: {//配置跨域
        '/api': {
          target: 'http://localhost:8088/CompanyManage/public/index/index',//这里后台的地址模拟的;应该填写你们真实的后台接口
          ws: true,
          changOrigin: true,//允许跨域
          pathRewrite: {
            '^/api': ''//请求的时候使用这个api就可以
          }
        },
        '/prox':{
          target: 'http://img1.money.126.net/data/hs/time/',//这里后台的地址模拟的;应该填写你们真实的后台接口
          ws: true,
          changOrigin: true,//允许跨域
          pathRewrite: {
            '^/prox': ''//请求的时候使用这个api就可以
          }
        }
      }
    },
    publicPath: './',
    configureWebpack: (config) => {
      if (process.env.NODE_ENV === 'production') {
        config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true
      }
    },
    productionSourceMap: process.env.NODE_ENV === 'production' ? false : true
  }