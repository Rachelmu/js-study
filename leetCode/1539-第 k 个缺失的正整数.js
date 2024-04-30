// 给你一个 严格升序排列 的正整数数组 arr 和一个整数 k 。
// 请你找到这个数组里第 k 个缺失的正整数。

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) {
    if (arr[0] > k) {
        return k;
    }

    let l = 0, r = arr.length;
    while (l < r) {
        const mid = Math.floor((l + r) / 2);
        let x = mid < arr.length ? arr[mid] : 2000000;
        if (x - mid - 1 >= k) {
            r = mid;
        } else {
            l = mid + 1;
        }
    }

    return k - (arr[l - 1] - (l - 1) - 1) + arr[l - 1];
};