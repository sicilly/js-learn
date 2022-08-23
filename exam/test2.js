var print = console.log
var __readline = require('readline-sync')
__readline.setDefaultOptions({prompt: ''})
var read_line = __readline.prompt
/*
美团0806
小美的魔法石共鸣
时间限制： 3000MS
内存限制： 589824KB
题目描述：
        小美有n块魔法石，每块魔法石都有正反两面，每一面上都刻有一个魔法阵，初始状态下，n块魔法石都是正面向上。这n块魔法石的能量刚好可以构建一个大型魔法阵，但是需要至少一半的魔法石向上的一面铭刻的阵法相同才能触发大型魔法阵的效果。

        小美希望翻转最少数量的魔法石，使得这个大型魔法阵被触发，请问她最少需要翻转多少块魔法石。



输入描述
输入第一行包含一个正整数n，表示魔法石的数量。(1<=n<=100000)

输入第二行包含n个正整数，表示n块魔法石正面铭刻的魔法阵种类，由于魔法书上记载的魔法阵数量太多，所以魔法阵编号可能是从1到10^9中的任何一个正整数。

输入第三行包含n个正整数，表示n块魔法石反面铭刻的魔法阵种类，魔法阵编号同样在1到10^9之间。

数字间两两有空格隔开

输出描述
输出仅包含一个整数，如果有解则输出最少翻转的魔法石数量，如果无解则输出-1。


样例输入
5
1 5 7 5 5 
10 5 5 9 10
样例输出
0
*/

function testFunction(){
    let n = parseInt(read_line());
    let line1=read_line().split(' '); // 第一行
    let line2=read_line().split(' '); // 第二行
    let map1=new Map();
    let map2=new Map();
    let map1max=0;
    let map2max=0;
    // 还没做出来
    // for(let i=0;i<n;i++){
    //     // 在map1中存放第一组的数字和对应出现次数
    //     let tmp1=parseInt(line1[i]);
    //     if(map1.has(tmp1)){ 
    //         let newVal=map1.get(tmp1)+1
    //         map1.set(tmp1,newVal);  // 出现次数+1
    //         if(map1max<newVal){
    //             map1max=newVal; // 更新map1中最大的value
    //         }
    //     }else{
    //         map1.set(tmp1,1);
    //     }
    //     // 在map2中存放第二组的数字和对应出现次数
    //     let tmp2=parseInt(line2[i]);
    //     if(map2.has(tmp2)){ 
    //         let newVal=map2.get(tmp2)+1
    //         map2.set(tmp2,newVal);  // 出现次数+1
    //         map2max=(map2max>newVal)?map2max:newVal;  // 记录map2中最大的value
    //     }else{
    //         map2.set(tmp2,1);
    //     }      
    // }
    // let need=(n+1)/2;  // 需要超过半数
    // if(map1max+map2max>need){ // 代表有解
    //     // print(need-map1max); // 看第一组还缺多少个，从第二组翻过来
    //     // print(need-map2max); // 看第二组还缺多少个，从第一组翻过来
    //     print(Math.min(need-map1max,need-map2max));
    // }else{
    //     print(-1);
    // }
}

testFunction(); 