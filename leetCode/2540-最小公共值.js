// 给你两个整数数组 nums1 和 nums2 ，它们已经按非降序排序，请你返回两个数组的 最小公共整数 。如果两个数组 nums1 和 nums2 没有公共整数，请你返回 -1 。
// 如果一个整数在两个数组中都 至少出现一次 ，那么这个整数是数组 nums1 和 nums2 公共 的。

/**s
 * 双指针
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var getCommon = function (nums1, nums2) {
    let [i, j] = [0, 0]
    const [n1, n2] = [nums1.length, nums2.length]
    while (i < n1 && j < n2) {
        const x = nums1[i]
        const y = nums2[j]
        if (x === y) {
            return x
        } else if (x < y) {
            i++
        } else {
            j++
        }
    }
    return -1
};

/** 二分查找
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const getCommon = function (nums1, nums2) {
    for (let num1 of nums1) {
        let left = 0, right = nums2.length - 1;
        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            if (nums2[mid] === num1) {
                return num1;
            } else if (nums2[mid] > num1) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
    }
    return -1;
};