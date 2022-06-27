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

