var sortArray = function(nums) {
    let n=nums.length;
    for(let i=n-1;i>0;i--){  // 第一轮把最大的数移到n-1位置，第二轮把第二大移到n-2位置...共进行n-1次比较
        for(let j=0;j<i;j++){ // 两两比较
            if(nums[j]>nums[j+1]){  // 前比后大，就要交换
                let tmp=nums[j];
                nums[j]=nums[j+1];
                nums[j+1]=tmp;
            }
        }
    }
    return nums;
};

console.log(sortArray([5,1,1,2,0,0]));
