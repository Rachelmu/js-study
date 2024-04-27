// 给定一个已按照 升序排列  的整数数组 numbers ，请你从数组中找出两个数满足相加之和等于目标数 target 。
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let mid = 0, left = 0, right = numbers.length - 1;
    for(let i = 0; i < numbers.length ; i++){
        left  = i + 1
        while(left <= right){
            mid = Math.floor((right -  left)/2) + left;
            if(numbers[mid] == target - numbers[i]){
                return [i, mid];
            }else if(numbers[mid] > target - numbers[i]){
                right = mid - 1;
            }else{
                left = mid + 1;
            };
        }

    }
    return [-1, -1];
};