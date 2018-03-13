class App{
    
    constructor(){
        this.ctx = {};
        this.stack = [];
        console.log('constructor');
    }

    use(middleware){
       this.stack.push(middleware);
    }

    async run(){
        if(this.stack.length){
            return await _run.call(this,0);
        }
        
        async function _run(index){
            const middleware = this.stack[index]||this.end;
            return await middleware.call(this, this.ctx, 
                _run.bind(this,index+1));
        }
    }

    end(){
        console.log('end');
    }
};


//Test
let app = new App();
app.use((ctx, next)=>{
    console.log('befor next1');
    next();
    console.log('after next1');
});

app.use(async (ctx, next)=>{
    console.log('befor next2');
    let dd = await ss();
    console.log("dd="+dd)
    await next();
    console.log('after next2');
});

async function ss(){
   return new Promise((resolve)=>{
    setTimeout(async ()=>{
        resolve(100);
    },1000)
   });
}

app.use((ctx, next)=>{
    console.log('befor next3');
    next();
    console.log('after next3');
});

app.use((ctx, next)=>{
    console.log('befor next4');
    next();
    console.log('after next4');
});

app.run();

