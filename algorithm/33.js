/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function(nums, target) {
    let left=0;
    let right=nums.length-1;
    while(left<right){
        let mid=Math.floor(left+(right-left)/2); // 向下取整
        if(nums[mid]==target){  // 刚好找到
            return mid;
        }else if(nums[mid]>nums[right]){ // 前半部分有序
            if(nums[left]<=target&&target<nums[mid]){ 
                right=mid-1; // 前半部分找
            }else{
                left=mid+1; // 后半部分找
            }
        }else{  // 后半部分有序
            if(nums[mid]<target&&target<=nums[right]){
                left=mid+1;  // 后半部分找
            }else{
                right=mid-1;  // 前半部分找
            }
        }
    }
    return nums[left]==target?left:-1;
};

console.log(search([4,5,6,7,0,1,2],0));
