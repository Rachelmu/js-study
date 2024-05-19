/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {
    if (Object.prototype.toString.call(nums) !== '[object Array]' || typeof target !== 'number') return;
  
    let low = 0;
        high = nums.length - 1;
    while (low < high) {
      let sum = nums[low] + nums[high];
      if (sum < target) {
        low ++
      } else if (sum > target) {
        high --
      } else {
        return [low+1, high+1]
      }
    }
  };