// 给定一个含有 n 个正整数的数组和一个正整数 s ，找出该数组中满足其和 ≥ s 的长度最小的 连续 子数组，并返回其长度。如果不存在符合条件的子数组，返回 0。
var minSubArrayLen = function(target, nums) {
    let start, end
    start = end = 0
    let sum = 0
    let len = nums.length
    let ans = Infinity
    
    while(end < len){
        sum += nums[end];
        while (sum >= target) {
            ans = Math.min(ans, end - start + 1);
            sum -= nums[start];
            start++;
        }
        end++;
    }
    return ans === Infinity ? 0 : ans
};

function minSubArrayLen(target, nums){
    let start, end
    start = end = 0
    let sum = 0
    let len = nums.length
    let ans = Infinity

    while(end < len){
        sum += sums[end]
        while(sum >= target){
            ans = Math.min(ans, end - start + 1)
            sum -= nums[start] 
            start++
        }
        end++
    }
    return ans === Infinity ? 0 : ans
}