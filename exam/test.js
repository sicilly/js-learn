var print = console.log
var __readline = require('readline-sync')
__readline.setDefaultOptions({prompt: ''})
var read_line = __readline.prompt

// 输入第一行是数字n，之后跟着n行数据
// let n = parseInt(read_line());
// for(let i = 0; i < n; i++) {
//     let lines=read_line().split(' ');
//     let a=parseInt(lines[0]);
//     let b=parseInt(lines[1]);
//     print(a+b);
// }


// 循环接收输入
// let line;
// while(line = read_line()) {   
//     let lines=line.split(' ');
//     let a=parseInt(lines[0]);
//     let b=parseInt(lines[1]);
//     print(a+b);
// }

/*
美团0806
小美的礼盒包装
时间限制： 3000MS
内存限制： 589824KB
题目描述：
        小美开的西点屋举办一周年活动，她准备制作一批礼盒作为对消费者的回馈，每个礼盒中都有三枚西点屋的招牌点心。西点屋共有A和B两种招牌点心，为了让消费者都能品尝到两种点心，因此每个礼盒中都要包含至少一枚A点心和一枚B点心。现在小美的西点屋内共有x枚A点心和y枚B点心，请问小美最多可以制作多少个礼盒。



输入描述
    输入第一行包含一个正整数T，表示数据组数。(1<=T<=10000)

    然后有T行，每行包含两个整数x和y，空格隔开，表示有x枚A点心和y枚B点心。(1<=x,y<=10^9)

输出描述
     输出包含T行，每行一个整数，表示最多可以制作的礼盒数量。


样例输入
2
44 85
9 49
样例输出
43
9
*/
function testFunction(){
    let n = parseInt(read_line());
    for(let i = 0; i < n; i++) {
        let lines=read_line().split(' ');
        let a=parseInt(lines[0]);
        let b=parseInt(lines[1]);
        let min=Math.min(a,b);
        let max=Math.max(a,b);
        let sub=max-min;  // 取差值
        // 有两种情况
        if(sub>=min) print(min);  // 用掉min个A，min个B组成min个礼盒，剩余sub个随便放
        else print((max+min)/3);  // 不能组成min个礼盒，就返回(max+min)/3
    }
}

testFunction(); 

