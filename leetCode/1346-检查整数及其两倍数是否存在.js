// 给你一个整数数组 arr，请你检查是否存在两个整数 N 和 M，满足 N 是 M 的两倍（即，N = 2 * M）。

// 更正式地，检查是否存在两个下标 i 和 j 满足：

// i != j
// 0 <= i, j < arr.length
// arr[i] == 2 * arr[j]

/** 二分法
 * @param {number[]} arr
 * @return {boolean}
 */
function checkIfExist(arr) {
    arr.sort((a, b) => (a - b))

    for (let i = 0; i < arr.length; i++) {
        let left = 0
        let right = arr.length - 1;

        while (left <= right) {
            let mid = left + Math.floor((right - left) >> 1);
            if (arr[mid] * 2 < arr[i])
                left = mid + 1
            else
                right = mid - 1;
        }

        if (arr[left] * 2 === arr[i] && left !== i) return true
    }

    return false
};