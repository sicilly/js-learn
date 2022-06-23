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

