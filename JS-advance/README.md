# JavaScript高级教程

## 1. 构造函数和原型

![image-20220621124911780](https://picture-1308610694.cos.ap-nanjing.myqcloud.com/202206211249868.png)



![image-20220621124950008](https://picture-1308610694.cos.ap-nanjing.myqcloud.com/202206211249081.png)

![image-20220621125033435](https://picture-1308610694.cos.ap-nanjing.myqcloud.com/202206211250505.png)



![image-20220621125109836](https://picture-1308610694.cos.ap-nanjing.myqcloud.com/202206211251907.png)

![image-20220621125140965](https://picture-1308610694.cos.ap-nanjing.myqcloud.com/202206211251045.png)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
        // 1. 构造函数的问题
        function Star(uname, age){
            this.uname=uname;
            this.age=age;
        }
        // 构造函数的原型对象
        Star.prototype.sing=function(){
            console.log('我会唱歌');
        }
        var ldh=new Star('刘德华',18);
        var zxy=new Star('张学友',19);

        console.log(ldh.sing==zxy.sing);  // true
        ldh.sing();  // 所有实例都可以使用这个方法
        zxy.sing();


        // 2. 一般情况下，公共属性定义到构造函数里面，公共方法放到原型对象身上
    </script>
</body>
</html>
```



![image-20220621124635132](https://picture-1308610694.cos.ap-nanjing.myqcloud.com/202206211246265.png)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
        function Star(uname,age){
            this.uname=uname;
            this.age=age;
        }
        Star.prototype.sing=function(){
            console.log("我会唱歌");
        }
        var ldh=new Star('刘德华',18);
        var zxy=new Star('张学友',19);
        ldh.sing();
        console.log(ldh);  // 对象身上有一个__proto__属性，指向构造函数的原型对象
        console.log(ldh.__proto__===Star.prototype)  // true

        // 方法的查找规则：
        // 找ldh身上有没有sing方法，有的话直接执行，如果没有就去构造函数的原型对象上找sing方法
    </script>
</body>
</html>
```





![image-20220621131549592](https://picture-1308610694.cos.ap-nanjing.myqcloud.com/202206211315646.png)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
        // function Star(uname,age){
        //     this.uname=uname;
        //     this.age=age;
        // }
        // Star.prototype.sing=function(){
        //     console.log('我会唱歌');
        // }
        // Star.prototype.movie=function(){
        //     console.log('我会演电影');
        // }
        // var ldh=new Star('刘德华',18);
        // var zxy=new Star('张学友',19);
        // console.log(Star.prototype.constructor);  // Star()构造函数
        // console.log(ldh.__proto__.constructor);   // Star()构造函数

        function Star(uname,age){
            this.uname=uname;
            this.age=age;
        }
        // 给原型对象赋值了一个对象，必须使用constructor手动指回构造函数
        // 否则就没有了constructor
        Star.prototype={
            constructor:Star,
            sing:function(){
                console.log('我会唱歌');
            },
            movie:function(){
                console.log('我会演电影');
            }
        }
        var ldh=new Star('刘德华',18);
        var zxy=new Star('张学友',19);
        console.log(Star.prototype);   // 重新出现constructor属性
        console.log(ldh.__proto__);    // 重新出现constructor属性

        console.log(Star.prototype.constructor);   // Star()构造函数
        console.log(ldh.__proto__.constructor);    // Star()构造函数

        


    </script>
</body>
</html>
```



![image-20220621131834431](https://picture-1308610694.cos.ap-nanjing.myqcloud.com/202206211318494.png)

![image-20220621132907798](https://picture-1308610694.cos.ap-nanjing.myqcloud.com/202206211329850.png)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
        function Star(uname,age){
            this.uname=uname;
            this.age=age;
        }
        Star.prototype.sing=function(){
            console.log('我会唱歌');
        }

        
        var ldh=new Star('刘德华',18);

        // 1. 只要是对象就有__proto__原型，指向原型对象
        console.log(Star.prototype);    // 构造函数的原型对象

        // 2. 我们Star原型对象里面的__proto__原型指向的是Object.prototype
        console.log(Star.prototype.__proto__===Object.prototype);  // true

        // 3. 我们Object.prototype原型对象里面的__proto__原型 指向为null
        console.log(Object.prototype.__proto__);  // null


    </script>
</body>
</html>
```





![image-20220621214805882](https://picture-1308610694.cos.ap-nanjing.myqcloud.com/202206212148928.png)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
        function Star(uname,age){
            this.uname=uname;
            this.age=age;
        }
        Star.prototype.sing=function(){
            console.log('我会唱歌');
        }

        Object.prototype.sex='女';
        var ldh=new Star('刘德华',18);
        ldh.sex='男';
        console.log(ldh.sex);  // 男

        console.log(Object.prototype);  // 有toString方法
        console.log(ldh.toString());  // [object Object]


    </script>
</body>
</html>
```



1.10 原型对象中this指向

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
        function Star(uname,age){
            this.uname=uname;
            this.age=age;
        }
        var that;
        Star.prototype.sing=function(){
            console.log('我会唱歌');
            that=this;
        }

        var ldh=new Star('刘德华',18);

        // 1.在构造函数中，里面this指向的是对象实例 ldh
        ldh.sing();
        console.log(that===ldh);  // true
        // 2. 原型对象函数里面的this指向的是实例对象ldh
        

    </script>
</body>
</html>
```





![image-20220621223807534](https://picture-1308610694.cos.ap-nanjing.myqcloud.com/202206212238570.png)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
        // 原型对象的应用 扩展内置对象方法
        console.log(Array.prototype);
        Array.prototype.sum=function(){
            var sum=0;
            for(var i=0;i<this.length;i++){
                sum+=this[i];
            }
            return sum;
        }
        var arr=[1,2,3];  // 实例对象调用构造函数原型对象上的sum方法
        console.log(arr.sum());  // 6
        console.log(Array.prototype);
        
        var arr1=new Array(11, 22, 33);
        console.log(arr1.sum());  // 66


    </script>
</body>
</html>
```



## 2. 继承

![image-20220621232554130](https://picture-1308610694.cos.ap-nanjing.myqcloud.com/202206212325171.png)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
        // call方法
        function fn(x,y){
            console.log(111);
            console.log(this);
            console.log(x+y);
        }
        var o={
            name:'andy'
        }

        // fn.call(); // 111  window

        // 改变了函数的this的指向
        fn.call(o,1,2);  // 111  {name:'andy'}  3

    </script>
</body>
</html>
```



![image-20220622142543566](https://picture-1308610694.cos.ap-nanjing.myqcloud.com/202206221425617.png)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
        // 借用父构造函数继承属性
        // 1. 父构造函数
        function Father(uname,age){
            // this指向父构造函数的对象实例
            this.uname=uname;
            this.age=age;
        }
        // 2. 子构造函数
        function Son(uname,age,score){
            // this指向子构造函数的对象实例
            Father.call(this,uname,age);
            this.score=score;
        }
        var son = new Son('刘德华',18,90);
        console.log(son);

    </script>
</body>
</html>
```



![image-20220622142603673](https://picture-1308610694.cos.ap-nanjing.myqcloud.com/202206221426704.png)

![image-20220622141600460](https://picture-1308610694.cos.ap-nanjing.myqcloud.com/202206221416506.png)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
        // 借用父构造函数继承方法
        // 1. 父构造函数
        function Father(uname,age){
            // this指向父构造函数的对象实例
            this.uname=uname;
            this.age=age;
        }
        // 父构造函数的原型对象上加一个方法
        Father.prototype.money=function(){
            console.log(100000);
        }
        // 2. 子构造函数
        function Son(uname,age,score){
            // this指向子构造函数的对象实例
            Father.call(this,uname,age);
            this.score=score;
        }
        // Son.prototype=Father.prototype;  // 这样直接赋值会有问题，如果直接赋值会有问题，如果修改了子原型对象，父原型对象也会跟着一起变化
        
        // Son原型对象指向Father实例对象，实现了继承
        Son.prototype=new Father();
        console.log(Son.prototype.constructor); // Father()
        // 如果利用对象的形式修改了原型对象，别忘了利用constructor指回原来的构造函数
        Son.prototype.constructor=Son;

        // 这个是Son专门的方法
        Son.prototype.exam=function(){
            console.log("孩子要考试");
        }
        
        var son = new Son('刘德华',18,90);
        console.log(son);  // 有exam()，也有 money()
        console.log(Father.prototype);  // 只有money()
        console.log(Son.prototype.constructor); // Son()

    </script>
</body>
</html>
```

## 3. ES5中的新增方法

![image-20220622144910560](https://picture-1308610694.cos.ap-nanjing.myqcloud.com/202206221449626.png)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
        var arr=[1,2,3];
        var sum=0;
        arr.forEach(function(value,index,array){
            console.log(value);
            console.log(index);
            console.log(array);
            sum+=value;
        })
        console.log(sum);
    </script>
    
</body>
</html>
```



![image-20220622224450117](https://picture-1308610694.cos.ap-nanjing.myqcloud.com/202206222244176.png)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
        var arr=[11,22,33,4,55];
        // filter 筛选数组
        var newArr=arr.filter(function(value,index){
            // return value>=20;
            return value %2 ===0;

        })
        console.log(newArr);
    </script>
    
</body>
</html>
```

![image-20220622225207938](https://picture-1308610694.cos.ap-nanjing.myqcloud.com/202206222252992.png)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
        var arr=[11,22,33,4,55];
        // some 查找数组中是否有符合条件的元素
        var flag=arr.some(function(value,index){
            return value>=50;
        })
        console.log(flag);

        var arr1=['red','pink','blue'];
        // 如果找到则直接返回true
        var flag1=arr1.some(function(value){
            return value=='pink';
        });
        console.log(flag1);
    </script>
    
</body>
</html>
```

![image-20220623225651274](https://picture-1308610694.cos.ap-nanjing.myqcloud.com/202206232256346.png)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <input type="text"> <button>点击</button>
    <div></div>
    <script>
        //trim方法去除字符串两端空格,不会去掉字符串中间的空格
        var str = '   andy   ';
        console.log(str);
        var str1 = str.trim();
        console.log(str1);
        var input = document.querySelector('input');
        var btn = document.querySelector('button');
        var div = document.querySelector('div');
        btn.onclick = function(){
            var str = input.value.trim();
            if( str === ''){
                alert('请输入内容');
            }else {
                console.log(str);
                console.log(str.length);
                div.innerHTML = str;
            }
        }
    </script>
</body>
</html>
```

![image-20220623230203804](https://picture-1308610694.cos.ap-nanjing.myqcloud.com/202206232302869.png)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
        //用于获取对象自身所有的属性
        var obj = {
            id : 1,
            pname:'小米',
            price:1999,
            num:2000
        };
       var arr = Object.keys(obj);
       console.log(arr);
       arr.forEach(function(value){
           console.log(value);
       })
    </script>

</body>
</html>
```

![image-20220623231153352](https://picture-1308610694.cos.ap-nanjing.myqcloud.com/202206232311421.png)



![image-20220624213614282](https://picture-1308610694.cos.ap-nanjing.myqcloud.com/202206242136353.png)

```html
<script>
    //Object.defineProperty()定义新属性或修改原有的样式
    var obj = {
        id:1,
        pname:'小米',
        price:1999
    };
    //1.以前的对象添加和修改属性的方式
    // obj.num = 1000;//向数组中添加属性
    // obj.price = 2000;//修改数组中原有的属性
    // console.log(obj);
    //2.Object.defineProperty()定义新属性或者修改原有的属性
    Object.defineProperty(obj,'num',{
        value:1000
    })
    Object.defineProperty(obj,'price',{
        value:9.9
    })
    console.log(obj);
    Object.defineProperty(obj,'id',{
        //如果值为false，则不允许修改这个属性值，默认值也是false
        writable:false
    });
    Object.defineProperty(obj,'adress',{
       value:'中国山东',
       writable:false,
       enumerable:false,//不允许遍历（枚举）
       configurable:false//不允许删除
    });
    console.log(obj);
    console.log(Object.keys(obj));
    delete obj.address;
    console.log(obj);  // 删不掉address
</script>
```

## 4. 函数进阶

![image-20220624215306343](https://picture-1308610694.cos.ap-nanjing.myqcloud.com/202206242153402.png)

![image-20220624220535695](https://picture-1308610694.cos.ap-nanjing.myqcloud.com/202206242205766.png)

![image-20220624222028437](https://picture-1308610694.cos.ap-nanjing.myqcloud.com/202206242220503.png)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
        //1.自定义函数（命名函数）
        function fn(){};
 
        //2.函数表达式（匿名函数）
        var fun = function(){};
 
        //3.利用new Function（'参数1'，'参数2'，'函数体'）
        var f = new Function('a','b','console.log(a+b)');
        f(1,2);
 
        //4.所有函数都是 Function 的实例（对象）
        console.dir(f);
        //5.函数也属于对象
        console.log(f instanceof Object);  // true
    </script>

</body>
</html>
```

![image-20220624222420466](https://picture-1308610694.cos.ap-nanjing.myqcloud.com/202206242224523.png)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
        //函数的调用方式
 
        //1.普通函数
        function fn(){
            console.log('哈哈哈');
        }
        // fn();  fn.call();
 
        //2.对象的方法
        var o = {
            sayHi:function(){
                console.log('你好呀');
            }
        }
        o.sayHi();
 
        //3.构造函数
        function Star(){};
        new Star();
 
        //4.绑定事件函数
        // btn.onclick = function(){};//点击了按钮就可以调用这个函数
 
        //5.定时器函数
        setInterval(function(){},1000); //这个函数是定时器自动一秒钟调用一次
 
        //6.立即执行函数
        //立即执行函数是自动调用
        (function(){
            console.log('开始调用啦');
        })()
 
    </script>

</body>
</html>
```

![image-20220624222958149](https://picture-1308610694.cos.ap-nanjing.myqcloud.com/202206242229216.png)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <button>按钮</button>
    <script>
        //函数的调用方式
 
        //1.普通函数this指向window
        function fn(){
            console.log('普通函数的this:'+this);  // [object Window]
        }
        fn();  
        // fn.call();
 
        //2.对象的方法 this指向的是对象o
        var o = {
            sayHi:function(){
                console.log('对象方法的this:'+this);
            }
        }
        o.sayHi();
 
        //3.构造函数 this指向ldh这个实例对象
        function Star(){console.log("构造函数的this:"+this)};
        // 原型对象里面的this也是指向ldh这个实例对象
        Star.prototype.sing=function(){
            console.log("原型对象里面的this:"+this)
        }
        var ldh=new Star();
        ldh.sing();
 

        //4.绑定事件函数  this指向的是函数的调用者 btn这个按钮对象
        var btn = document.querySelector('button');
        btn.onclick = function(){
            console.log('绑定时间函数的this:' + this);
        };//点击了按钮就可以调用这个函数

 
        //5.定时器函数  this指向的是window
        window.setTimeout(function(){
            console.log('定时器的this:'+this);
        },1000); //这个函数是定时器自动一秒钟调用一次
 
        //6.立即执行函数  指向的是window
        //立即执行函数是自动调用
        (function(){
            console.log('立即执行函数的this'+this);
        })()
 
    </script>

</body>
</html>
```

![image-20220624232019973](https://picture-1308610694.cos.ap-nanjing.myqcloud.com/202206242320037.png)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
        //改变函数内this指向  js提供了三种方法  call() apply() bind()
        var o={
            name:'andy'
        }
        function fn(a,b){
            console.log(this);
            console.log(a+b);
        }
        fn(1,2)  // window
        fn.call(o,1,2);  // {name: 'andy'}

        //call第一个可以调用函数  第二个可以改变函数内的this指向
        //call的主要作用可以实现继承
        function Father(uname,age,sex){
            this.uname=uname;
            this.age=age;
            this.sex=sex;
        }
        function Son(uname,age,sex){
            Father.call(this,uname,age,sex);  // 这里改变了this指向
        }

        var son=new Son('刘德华',18,'男');
        console.log(son);
    </script>
</body>
</html>
```

![image-20220624232128067](https://picture-1308610694.cos.ap-nanjing.myqcloud.com/202206242321135.png)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
        //改变函数内this指向  js提供了三种方法  call() apply() bind()
        var o={
            name:'andy'
        }
        function fn(arr){
            console.log(this);
            console.log(arr);
        }

        //1.也是调用函数  第二个可以改变函数内部的this指向
        //2.但是他的参数必须是数组（伪数组）
        fn.apply(o,['pink']);  // Object  pink

        //3.apply的主要应用 比如我们可以利用apply借助于数学内置对象求最大值
        // Math.max();
        var arr = [1,66,3,99,4];
        var max =  Math.max.apply(null,arr);
        var min =  Math.min.apply(null,arr);
        console.log(max);

    </script>
</body>
</html>
```

![image-20220627224129038](https://picture-1308610694.cos.ap-nanjing.myqcloud.com/202206272241118.png)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <button>按钮1</button>
    <button>按钮2</button>
    <button>按钮3</button>
    <script>
        //改变函数内this指向  js提供了三种方法  call() apply() bind()
        var o={
            name:'andy'
        }
        function fn(a,b){
            console.log(this);
            console.log(a+b);
        }

        //1.不会调用原来的函数  可以改变原来函数内部的this指向
        //2.返回的是原函数改变this指回产生的新函数
        var f=fn.bind(o,1,2);
        f();   // {name: "andy"}   3

        //3.如果有的函数不需要我们立即调用，但是又想改变这个函数内部的this指向，此时用bind
        //4.我们有一个按钮，当我们点击了之后，就禁用这个按钮，3秒钟之后开启这个按钮
        // var btn=document.querySelector('button');
        // btn.onclick=function(){
        //     this.disabled=true;  //这个this指向的是btn这个按钮
        //     // var that = this;
        //     setTimeout(function(){
        //         // that.disabled = false;//定时器函数里面的this指向的是window
        //         this.disabled=false; //此时定时器函数里面的this指向的是btn
        //     }.bind(this),3000); //这个this指向的是btn这个对象
        // }

        // 如果有三个按钮,点哪个就禁用哪个，2秒钟再开启
        var btns=document.querySelectorAll('button');
        for(var i=0;i<btns.length;i++){
            btns[i].onclick=function(){
                this.disabled=true;
                setTimeout(function(){
                    this.disabled=false;
                }.bind(this),2000);
            }
        }

    </script>
</body>
</html>
```

![image-20220627224415875](https://picture-1308610694.cos.ap-nanjing.myqcloud.com/202206272244945.png)

![image-20220627224801354](https://picture-1308610694.cos.ap-nanjing.myqcloud.com/202206272248436.png)

![image-20220627225329512](https://picture-1308610694.cos.ap-nanjing.myqcloud.com/202206272253590.png)

![image-20220627225410524](https://picture-1308610694.cos.ap-nanjing.myqcloud.com/202206272254593.png)

![image-20220627225808732](https://picture-1308610694.cos.ap-nanjing.myqcloud.com/202206272258798.png)

![image-20220627232524091](https://picture-1308610694.cos.ap-nanjing.myqcloud.com/202206272325167.png)

![image-20220627232901109](https://picture-1308610694.cos.ap-nanjing.myqcloud.com/202206272329194.png)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
        'use strict';
        // 1. 变量名必须先声明再使用
        num=10;
        console.log(num);  //Uncaught ReferenceError: num is not defined
    
        // 2. 不能删除已经声明的变量
        var num=10;
        console.log(num);
        // delete num;  // Uncaught SyntaxError: Delete of an unqualified identifier in strict mode.
    
         //3.严格模式下全局作用域中函数中的this是undefined
        function fn(){
            console.log(this);  // undefined
        }
        fn();


        //4.严格模式下，如果构造函数不加new调用，this会报错
        function Star(){
            this.sex = '男';
        }
        // Star();  // Uncaught TypeError: Cannot set properties of undefined (setting 'sex')
        var ldh = new Star();
        console.log(ldh.sex);

        //5.定时器里面的this指向的仍然是window
        setTimeout(function(){
            console.log(this);
        },2000)

        //6.严格模式下不允许有函数重名
        // function fn(a,a){
        //     console.log(a+a);  //Uncaught SyntaxError: Duplicate parameter name not allowed in this context
        // };
        // fn(1,2);
    </script>

</body>
</html>
```

![image-20220627233128765](https://picture-1308610694.cos.ap-nanjing.myqcloud.com/202206272331849.png)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        div{
            position: absolute;
            width: 100px;
            height: 100px;
            background-color: pink;
        }
    </style>
</head>
<body>
    <div></div>
    <script src="https://lib.baomitu.com/jquery/2.2.4/jquery.min.js"></script>
    <script>
        function fn(a,b,callback){
            console.log(a+b);
            callback&&callback();
        }
        fn(1,2,function(){
            console.log('我是最后调用的');
        })
        $("div").animate({
            left:500
        },function(){
            $("div").css("backgroundColor",'purple');
        })

        
    </script>
</body>
</html>
```

## 5. 闭包

![image-20220628210405157](https://picture-1308610694.cos.ap-nanjing.myqcloud.com/202206282104235.png)

![image-20220628210516938](https://picture-1308610694.cos.ap-nanjing.myqcloud.com/202206282105005.png)

**什么是闭包1：**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
        //闭包(closure)指有权访问另一个函数作用域中变量的函数
        //闭包：fun 这个函数作用域  访问了另一个函数fn 里面的局部变量 num
        function fn(){
            var num=10;
            function fun(){
                console.log(num);
            }
            fun();
        }
        fn();
        
    </script>
</body>
</html>
```

在这里fn()就是一个闭包函数

![image-20220628211426292](https://picture-1308610694.cos.ap-nanjing.myqcloud.com/202206282114361.png)



**什么是闭包2：**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>

        //我们fn外面的作用域可以访问fn内部的局部变量
        //闭包的主要作用：延伸了变量的作用范围

        function fn(){
            var num=10;
            // function fun(){
            //     console.log(num);
            // }
            // return fun;

            // 简单写法 直接返回一个函数
            return function(){
                console.log(num);
            }
        }
        f=fn();  // 拿到这个函数
        f();  // 调用这个函数
    </script>
</body>
</html>
```



![image-20220628220441744](https://picture-1308610694.cos.ap-nanjing.myqcloud.com/202206282204804.png)



**闭包案例01**

循环注册点击事件（点击li输出当前li的索引号）

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <ul class="nav">
        <li>榴莲</li>
        <li>臭豆腐</li>
        <li>鱼罐头</li>
        <li>大猪蹄子</li>
    </ul>
    <script>
       //闭包应用-点击li输出当前li的索引号
        //1.我们可以利用动态添加属性的方法做
        var lis = document.querySelector('.nav').querySelectorAll('li');
        // for(var i = 0;i <lis.length; i++){
        //     lis[i].index = i;
        //     lis[i].onclick = function(){
        //         // console.log(i);  // 全输出4
        //         console.log(this.index);
        //     }
        // }

        
        //2.利用闭包的方式得到当前li 的索引号
        for(var i = 0; i < lis.length; i++){
            //利用for循环创建了4个立即执行函数
            //立即执行函数也称为小闭包，因为立即执行函数里面的任何一个函数都可以使用它的i这个变量
            (function(i){
                // console.log(i);
                lis[i].onclick = function(){
                    console.log(i);
                }
            })(i);

        }
        
    </script>
</body>
</html>
```

**闭包案例02**

循环中的setTimeout() ---3秒之后，打印li元素的所有内容

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <ul class="nav">
        <li>榴莲</li>
        <li>臭豆腐</li>
        <li>鱼罐头</li>
        <li>大猪蹄子</li>
    </ul>
    <script>
        //闭包应用=3秒钟之后，打印所有li元素的内容
        var lis = document.querySelector('.nav').querySelectorAll('li');
        // for循环是同步任务，定时器是异步任务
        for(var i=0;i<lis.length;i++){
            // setTimeout(function(){
            //     console.log(lis[i].innerHTML);  // 会报错
            // },3000)

            // 只要是在立即执行函数里面的任何一个函数都可以使用立即执行函数的i变量
            (function(i){
                setTimeout(function(){
                    console.log(lis[i].innerHTML);
                },3000)
            })(i);
        }
        
    </script>
</body>
</html>
```

思考题：

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
        // 思考题1：
        // var name="the window"
        // var object={
        //     name:"my object",
        //     getNameFunc:function(){
        //         return function(){
        //             return this.name;
        //         }
        //     }
        // };
        // console.log(object.getNameFunc()());  // the window

        // 思考题2：
        var name="the window"
        var object={
            name:"my object",
            getNameFunc:function(){
                var that=this;
                return function(){
                    return that.name;
                }
            }
        };
        console.log(object.getNameFunc()());  // my object          
    </script>
</body>
</html>
```

![image-20220628233812481](https://picture-1308610694.cos.ap-nanjing.myqcloud.com/202206282338567.png)





## 6. 递归

利用递归求：根据id返回对应的数据对象 

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
        var data = [{
            id:1,
            name:'家电',
            goods:[{
                id:11,
                gname:'冰箱'
            },{
                id:12,
                gname:'洗衣机'
            }]
        },{
            id:2,
            name:'服饰'
        }];
        //我们想要做输入id号，就可以返回的数据对象
        //1.利用forEach遍历里面的每一个对象
        function getID(json,id){
            var o = {};
            json.forEach(function(item){
                // console.log(item); //2个数据元素
                if(item.id == id){
                    // console.log(item);
                    o = item;
                    return item;
                    //2.我们想要得到里层的数据 11-12可以利用递归函数
                    //里面应该有goods这个数组，并且这个数组的长度不为0
                } else if (item.goods && item.goods.length >0){
                  o = getID(item.goods,id);
                }
            });
            return o;
        }
        console.log(getID(data,1));
        console.log(getID(data,2));
        console.log(getID(data,11));
        console.log(getID(data,12));
    </script>
</body>
</html>
```



![image-20220629214555080](https://picture-1308610694.cos.ap-nanjing.myqcloud.com/202206292145144.png)



浅拷贝

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
        var obj={
            id:1,
            name:'andy',
            msg:{
                age:18
            }
        }
        var o={};
        // 浅拷贝是把更深层次的对象的地址拷贝给了o，所以更改o会影响到obj
        for(var k in obj){
            // 把属性值obj[k]给到o[k]
            o[k]=obj[k];
        }
        console.log(o);
        o.msg.age=20;
        console.log(obj);  // 也被改成了20
        
        console.log("用ES6的assign方法：")
        Object.assign(o,obj);
        console.log(o);
    </script>
</body>
</html>
```



![img](https://picture-1308610694.cos.ap-nanjing.myqcloud.com/202206292144901.png)



深拷贝



![image-20220629215047186](https://picture-1308610694.cos.ap-nanjing.myqcloud.com/202206292150256.png)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
        //深拷贝拷贝多层，每一级别的数据都会拷贝
        var obj ={
            id:1,
            name:'andy',
            msg:{
                age:18
            },
            color:['pink','red']
        };
        var o = {};

        // 封装函数
        function deepCopy(newobj,oldobj){
            for(var k in oldobj){
                // 判断属性值是哪种数据类型
                // 1.获取属性值oldobj[k]
                var item=oldobj[k];
                // 2. 判断这个值是否是数组
                if(item instanceof Array){
                    newobj[k]=[];
                    deepCopy(newobj[k],item);  // 递归
                }else if(item instanceof Object){
                // 3. 判断这个值是否是对象
                    newobj[k]={};
                    deepCopy(newobj[k],item);  // 递归
                }else{
                    // 4. 属于简单数据类型
                    newobj[k]=item;
                }
            }
        }
        // 调用函数
        deepCopy(o,obj);
        console.log(o);

        var arr=[];
        console.log(arr instanceof Object); // 数组也属于对象，所以上面要先判断数组
        o.msg.age=20;
        console.log(obj);  // 还是18，没变

    </script>
</body>
</html>
```

## 7. 正则表达式

![image-20220703175818735](https://picture-1308610694.cos.ap-nanjing.myqcloud.com/202207031759785.png)

![image-20220703180034759](https://picture-1308610694.cos.ap-nanjing.myqcloud.com/202207031800834.png)

![image-20220703180456822](https://picture-1308610694.cos.ap-nanjing.myqcloud.com/202207031804904.png)

![image-20220703181013235](https://picture-1308610694.cos.ap-nanjing.myqcloud.com/202207031810325.png)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
        // 1. 构造函数创建
        var regexp=new RegExp(/123/);
        console.log(regexp);
        // 2. 字面量创建
        var rg=/123/;
        // 3. test方法检测字符串是否符合正则表达式的要求
        console.log(rg.test(123));  // true
        console.log(rg.test('abc'));  // false
    </script>
</body>
</html>
```



![image-20220703182209077](https://picture-1308610694.cos.ap-nanjing.myqcloud.com/202207031822184.png)

![image-20220703180931649](https://picture-1308610694.cos.ap-nanjing.myqcloud.com/202207031809739.png)

![image-20220703222524597](https://picture-1308610694.cos.ap-nanjing.myqcloud.com/202207032225665.png)

![image-20220703222554964](https://picture-1308610694.cos.ap-nanjing.myqcloud.com/202207032225036.png)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
        // 只要包含abc，就是true
        var rg=/abc/;    
        console.log(rg.test('abc'));   // true
        console.log(rg.test('abcd'));  // true
        console.log(rg.test('aabcd')); // true
        console.log('-------------')

        // 以abc开头就是true
        var reg=/^abc/
        console.log(reg.test('abc'));   // true
        console.log(reg.test('abcd'));  // true
        console.log(reg.test('aabcd'));  // false
        console.log('-------------')

        // 精确匹配abc才是true
        var reg1=/^abc$/
        console.log(reg1.test('abc'));   // true
        console.log(reg1.test('abcd'));  // flase
        console.log(reg1.test('aabcd'));  // false



    </script>
</body>
</html>
```

![image-20220703222610758](https://picture-1308610694.cos.ap-nanjing.myqcloud.com/202207032226825.png)
