
let obj = {
    get name(){
        return "dd1"
    }
};
Object.defineProperty(obj,"name", {
   get:function(){
    return this.value;
   } ,
    set:function(value){
        this.value = value;
    },
    enumerable:true,
    configurable:true
})
obj.name="dd"


console.log(obj.name);


Object.defineProperty