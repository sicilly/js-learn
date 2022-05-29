function setName(obj){
    obj.name = "Nicholas";
    //obj = new Object();
    //obj.name = "Greg";
    let obj2=obj;
    obj2.name="Greg";
}

var person = new Object();
setName(person);  // 所有函数的参数都是按值传递的
console.log(person.name);//"Nicholas"
    