var sortArray = function(nums) {
    let n=nums.length;
    for(let i=0;i<n-1;i++){ // i从0到n-2
        let minIndex=i;     
        for(let j=i+1;j<n;j++){  // 在未排好序的部分找到最小的
            minIndex=(nums[minIndex]<nums[j])?minIndex:j;  // 更新最小值所在的索引
        }
        // 最小的元素交换到i位置
        let tmp=nums[i];
        nums[i]=nums[minIndex];
        nums[minIndex]=tmp;
    }
    return nums;
};
console.log(sortArray([5,1,1,2,0,0]));