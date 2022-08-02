function quickSort(arr){
    let len=arr.length;
    if(len<=1) return arr; // 终止条件
    let pivotIndex=Math.floor(len/2);
    let pivotVal=arr.splice(pivotIndex,1)[0];  // 取出基准值
    let left=[]
    let right=[]
    for(let i=0;i<arr.length;i++){ // 注意这里要重新计算arr的长度
        if(arr[i]>pivotVal){
            right.push(arr[i]);
        }else{
            left.push(arr[i]);
        }
    }
    return quickSort(left).concat([pivotVal],quickSort(right));
}

arr=[8,6,12,2,5,9,1]

console.log(quickSort(arr));