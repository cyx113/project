const Router = require('koa-router');
const router = new Router();
const client=require('./mysqle.js')
//获取本月计划
router.post('/students', async (ctx, next)=>{
  let time=ctx.request.body.time;
  let nian=time.substr(0,4);
  let yue=time.substr(5,2)
  let sql=`select * from zjh where nian='${nian}'and yue='${yue}'`
	var tmp = await client.query(sql).then(function(result) {
     if(result.length===0){
      let re=[{'1': '本月没有学习计划'}]
      return re
     }
      return result;
    }, function(error){
      return -1;
    });
    ctx.body=tmp;
});
//获取本日安排
router.post('/rjh', async (ctx, next)=>{
  let time=ctx.request.body.time;
  let nian=time.substr(0,4);
  let yue=time.substr(5,2);
  let ri=time.substr(8,2);
  let sql=`select * from rcap where nian='${nian}'and yue='${yue}'and ri='${ri}'`
  
  var tmp = await client.query(sql).then(function(result) {
    console.log("123")
     if(result.length===0){
      let re=[{'6': '本日没有学习计划'}]
      return re
     }
      return result;
    }, function(error){
      return -1;
    });
    ctx.body=tmp;
});

//设置工作计划
router.post('/setdayle', async (ctx, next)=>{
  // 解析时间
  let time=ctx.request.body.time;
  let nian=time.substr(0,4);
  let yue=time.substr(5,2);
  let rri=time.substr(8,2);
  let ri="q"+rri;
  let conet=ctx.request.body.conet
  // 查询是否有这个表格，有修改无创建
   if(ctx.request.body.dayplan.length!==0){
      let sql=`select * from zjh where nian='${nian}'and yue='${yue}'`
      var tmp = await client.query(sql).then(function(result) {
         if(result.length===0){
            // 无，创建
          let re=`insert into zjh (nian , yue, ${ri}) value('${nian}','${yue}','${ctx.request.body.dayplan}')`
          let er = client.query(re).then(function(result) {return result}, function(error){return -1;})
          return er 
         }else{
           // 有修改
          let tr=`update zjh set ${ri} ='${ctx.request.body.dayplan}' where nian='${nian}'and yue='${yue}'`;
          let es =  client.query(tr).then(function(result) {return result}, function(error){return -1;})
          return es
         }
        }, function(error){return -1;}
      );
  }
  
  //查询是否有日计划这个表格，有修改无创建 
  //
  //
  //
  //
  let sqls=`select * from rcap where nian='${nian}'and yue='${yue}'and ri='${rri}'` 
  var td = await client.query(sqls).then(function(result) {

     if(result.length===0){
      // 没有，就创建
      //通过循环将条件语句补全
      let imag='';let asd='';
      for (let key in conet){ imag=imag +","+ key;asd=asd+",'" +conet[key]+"'"}
      let re=`insert into rcap (nian , yue, ri ${imag}) value('${nian}','${yue}','${rri}' ${asd})`;
      let ersd = client.query(re).then(function(result) {return result }, function(error){return -1;})
      return ersd;
     }else{
      //添加
      let pinj='';
      //通过循环将条件语句补全
      for (let key in conet){ pinj=pinj + key + "='" +conet[key]+"',"}
      pinj = pinj.substr(0, pinj.length - 1);  
      let trgr=`update rcap set ${pinj}  where nian='${nian}'and yue='${yue}'and ri='${rri}'`;
      let est =  client.query(trgr).then(function(result) {return result}, function(error){return -1;})
      return est;
     }
    }, function(error){return -1;}
  );
  if (td!==-1&&tmp!==-1){
    ctx.body="成功";
  }else{
    ctx.body="失败";
  }
});


module.exports=router;