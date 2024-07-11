// 给你一个按 非递减顺序 排列的数组 nums ，返回正整数数目和负整数数目中的最大值。

// 换句话讲，如果 nums 中正整数的数目是 pos ，而负整数的数目是 neg ，返回 pos 和 neg二者中的最大值。
// 注意：0 既不是正整数也不是负整数。

var maximumCount = function(nums) {
    const pos1 = lowerBound(nums, 0);
    const pos2 = lowerBound(nums, 1);
    return Math.max(pos1, nums.length - pos2);
};

const lowerBound = (nums, val) => {
    let l = 0, r = nums.length;
    while (l < r) {
        const m = (l + r) >> 1;
        if (nums[m] >= val) {
            r = m;
        } else {
            l = m + 1;
        }
    }
    return l;
}

/** 循环暴力解法
 * @param {number[]} nums
 * @return {number}
 */
var maximumCount = function(nums) {
    var n = 0;
    var non = 0;
    for(let i = 0;i < nums.length; i++){
        if(nums[i] < 0){
            n++
        }
        else if(nums[i] > 0){
            non++
        }
        
    }
    return Math.max(n, non);
};

var maximumCount = function(nums){
    let mid, left = 0 , right = nums.length
    while(left < right){
        mid = Math.floor((rigth - left) / 2) + left
    }
}