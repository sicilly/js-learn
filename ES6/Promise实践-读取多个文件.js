const { rejects } = require('assert');
const fs=require('fs');
const { resolve } = require('path');

// 回调地狱
// fs.readFile('./resources/doc.md',(err,data)=>{
//     fs.readFile('./resources/doc2.md',(err,data2)=>{
//         fs.readFile('./resources/doc3.md',(err,data3)=>{
//             console.log(data+'\r\n'+data2+'\r\n'+data3);
//         })
//     })
// })

const p=new Promise((resolve,reject)=>{
    fs.readFile('./resources/doc.md',(err,data)=>{
        resolve(data);
    })
})

// 使用promise实现
p.then(value=>{
    return new Promise((resolve,reject)=>{
        fs.readFile('./resources/doc2.md',(err,data)=>{
            resolve([value,data]);
        })
    })
}).then(value=>{
    return new Promise((resolve,reject)=>{
        fs.readFile('./resources/doc3.md',(err,data)=>{
            value.push(data); // 压入
            resolve(value);
        })
    })  
}).then(value=>{
    console.log(value.join('\r\n'));
})