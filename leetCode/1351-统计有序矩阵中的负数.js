// 给你一个 m * n 的矩阵 grid，矩阵中的元素无论是按行还是按列，都以非严格递减顺序排列。 请你统计并返回 grid 中 负数 的数目。

var countNegatives = function (grid) {
    if (grid.length === 0) return 0;

    let row = grid.length;
    let sum = 0;

    for (let r = 0; r < row; r++) {
        sum += search(grid[r]);
    }

    return sum;
};

var search = function (list) {
    let left = 0;
    let right = list.length - 1;

    // 由于是非递减序列，第一个数最大，如果第一个数都小于 0，则整个数组都小于 0
    if (list[left] < 0) return list.length;
    // 由于是非递减序列，最后一个数最小，如果第一个数都大于 0，则整个数组都大于 0
    if (list[right] > 0) return 0;

    while (left <= right) {
        let mid = left + Math.floor((right - left) >> 1);
        // 非递增，则左侧数最大，找小于 0 的最大数
        if (list[mid] < 0) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return list.length - left;
}

var countNegatives = function (grid) {
    if (grid.length === 0) return 0;

    let len = grid.length;
    let sum = 0;

    for (let i = 0;  i< len; i++) {
        sum += search(grid[r]);
    }

    return sum;
};

var search = function(list) {
    
}