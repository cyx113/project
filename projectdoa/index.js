const Koa = require('koa');
const router=require('./routes.js')
const app = new Koa();


app
  .use(router.routes())
  .use(router.allowedMethods());
  app.listen(3000,()=>{
      console.log('starting at port 3000');
  });