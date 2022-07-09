// 声明构造方法
function Promise(executor){
    // 添加属性
    this.PromiseState='pending';
    this.PromiseResult=null;
    // 声明属性
    this.callbacks=[];
    // 保存实例对象的this的值
    const self=this; 
    // resolve函数
    function resolve(data){
        // console.log(this);  // window
        // 判断状态
        if(self.PromiseState!=='pending') return;
        // 1.修改对象的状态(promiseState)
        self.PromiseState='fulfilled'; // resolved
        // 2.设置对象结果值(promiseResult)
        self.PromiseResult=data;
        // 调用成功的回调函数 遍历
        self.callbacks.forEach(item=>{
            item.onResolved(data);
        })

    }
    // reject函数
    function reject(data){
        // 判断状态
        if(self.PromiseState!=='pending') return;
        // 1.修改对象的状态(promiseState)
        self.PromiseState='rejected'; // rejected
        // 2.设置对象结果值(promiseResult)
        self.PromiseResult=data;
        // 调用失败的回调函数 遍历
        self.callbacks.forEach(item=>{
            item.onRejected(data);
        })
    }
    try {
        // 同步调用执行器函数
        executor(resolve,reject);       
    } catch (e) {
        // 修改promise对象状态为失败
        reject(e);
    }


}
// 添加then方法
Promise.prototype.then=function(onResolved,onRejected){
    // 调用回调函数
    if(this.PromiseState==='fulfilled'){
        onResolved(this.PromiseResult);
    }
    if(this.PromiseState==='rejected'){
        onRejected(this.PromiseResult);
    }
    // 判断pending状态
    if(this.PromiseState==='pending'){
        // 保存回调函数
        this.callbacks.push({
            onResolved:onResolved,
            onRejected:onRejected
        })
    }
}