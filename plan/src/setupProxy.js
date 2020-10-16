const proxy = require('http-proxy-middleware')
module.exports = function(app) {
  // /api 表示代理路径
  // target 表示目标服务器的地址
  app.use(proxy.createProxyMiddleware(
    '/api', {
      target: 'http://localhost:3001',// http://localhost:4000/ 地址是示例，实际地址以项目为准
      changeOrigin: true,// 跨域时一般都设置该值 为 true
      pathRewrite: {  // 重写接口路由
        '^/api': '' // 这样处理后，最终得到的接口路径为： http://localhost:8080/xxx
      }
    })
  )
}