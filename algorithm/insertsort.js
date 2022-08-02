/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var sortArray = function(nums) {
    let n=nums.length;
    for(let i=1;i<n;i++){  // i从1到n-1 类似选出一张牌
        let tmp=nums[i]; // 暂存这个元素
        let j=i; // j表示准备插入的位置
        while(j>0&&nums[j-1]>tmp){ // 找合适的位置:只要j-1位置比当前牌要大
            nums[j]=nums[j-1]; // j-1位置就要向后移
            j--; // 再继续往前找
        }
        nums[j]=tmp; // 插入位置j
    }
    return nums;
};

console.log(sortArray([5,1,1,2,0,0]));