const Koa = require('koa');
const router=require('./routes.js')
const app = new Koa();
const bodyParser = require('koa-bodyparser');

app.use(bodyParser());

app
  .use(router.routes())
  .use(router.allowedMethods());
  app.listen(3001,()=>{
      console.log('starting at port 3001');
  });