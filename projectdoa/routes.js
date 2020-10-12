const Router = require('koa-router');
const router = new Router();
const client=require('./mysqle.js')
router.get('/', async (ctx, next)=>{
	var tmp = await client.query("select * from article where id = 1;").then(function(result) {
      console.log('1');
      return result;
    }, function(error){
      return -1;
    });
    ctx.body=tmp;
});
router.get('/selt', async (ctx, next)=>{
	var tmp = await client.query("select * from blog_content").then(function(result) {
	console.log('2');
      return result;
    }, function(error){
      return -1;
    });
    ctx.body=tmp;
});




module.exports=router;