// 1. 引入fs模块
const fs=require("fs");

// 读取文件
function readfile(){
    // 返回一个promise对象
    return new Promise((resolve,reject)=>{
        fs.readFile("./resources/file.md",(err,data)=>{
            if(err) reject(err);  // 如果失败
            resolve(data);  // 如果成功
        })
    })
}

// 声明一个async函数
async function main(){
    // await后面跟一个promise对象
    let data=await readfile();
    console.log(data.toString());
}

main();