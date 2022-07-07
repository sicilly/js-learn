// 声明构造方法
function Promise(executor){
    // 添加属性
    this.PromiseState='pending';
    this.PromiseResult=null;
    // 保存实例对象的this的值
    const self=this; 
    // resolve函数
    function resolve(data){
        // console.log(this);  // window
        // 1.修改对象的状态(promiseState)
        self.PromiseState='fulfilled'; // resolved
        // 2.设置对象结果值(promiseResult)
        self.PromiseResult=data;
    }
    // reject函数
    function reject(data){
        // 1.修改对象的状态(promiseState)
        self.PromiseState='rejected'; // rejected
        // 2.设置对象结果值(promiseResult)
        self.PromiseResult=data;
    }

    executor(resolve,reject);       
    


}
// 添加then方法
Promise.prototype.then=function(onResolved,onRejected){

}