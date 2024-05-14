// 给你两个整数数组 arr1 ， arr2 和一个整数 d ，请你返回两个数组之间的 距离值 。

// 「距离值」 定义为符合此距离要求的元素数目：对于元素 arr1[i] ，不存在任何元素 arr2[j] 满足 |arr1[i]-arr2[j]| <= d 。

/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number} d
 * @return {number}
 */
var findTheDistanceValue = function (arr1, arr2, d) {
    arr2.sort((a, b) => a - b);
    let res = 0;

    for (let i = 0; i < arr1.length; i++) {
        let tmp = true;
        let inx = searchInx(arr2, arr1[i]);

        if (inx - 1 >= 0) {
            tmp = tmp & Math.abs(arr1[i] - arr2[inx - 1]) > d;
        }

        if (inx < arr2.length) {
            tmp = tmp & Math.abs(arr1[i] - arr2[inx]) > d;
        }

        if (tmp) res++;
    }

    return res;
};

var searchInx = function (arr2, i) {
    let left = 0;
    let right = arr2.length - 1;
    while (left <= right) {
        let mid = left + Math.floor((right - left) >> 1);
        if (arr2[mid] < i) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return left;
}

// 暴力解法
var findTheDistanceValue = function (arr1, arr2, d) {
    let ret = 0
    for (let i = 0; i < arr1.length; i++) {
        if (arr2.every(v => Math.abs(v - arr1[i]) > d)) {
            ret++
        }
    }
    return ret
};