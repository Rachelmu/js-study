// 2389. 和有限的最长子序列
// 给你一个长度为 n 的整数数组 nums ，和一个长度为 m 的整数数组 queries 。
// 返回一个长度为 m 的数组 answer ，其中 answer[i] 是 nums 中 元素之和小于等于 queries[i] 的 子序列 的 最大 长度  。
// 子序列 是由一个数组删除某些元素（也可以不删除）但不改变剩余元素顺序得到的一个数组。
/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @return {number[]}
 */
var answerQueries = function(nums, queries) {
    const n = nums.length, m = queries.length;
    nums.sort((a, b) => a - b);
    const f = new Array(n + 1).fill(0);
    for (let i = 0; i < n; i++) {
        f[i + 1] = f[i] + nums[i];
    }
    const answer = new Array(m).fill(0);
    for (let i = 0; i < m; i++) {
        answer[i] = binarySearch(f, queries[i]) - 1;
    }
    return answer;
}

const  binarySearch = (f, target) => {
    let low = 1, high = f.length;
    while (low < high) {
        const mid = low + Math.floor((high - low) / 2);
        if (f[mid] > target) {
            high = mid;
        } else {
            low = mid + 1;
        }
    }
    return low;
};
