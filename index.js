const koa =  require("koa");
const app = new koa();

app.use(async (ctx,next)=>{
    console.log('aa');
    next();
})

app.use(async (ctx, next)=>{
    ctx.body = {a:2};
    next();
});

app.use(async (ctx,next)=>{
    console.log('bb');
})


app.listen(3000);