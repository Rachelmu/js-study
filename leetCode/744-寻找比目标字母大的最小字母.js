// 给你一个字符数组 letters，该数组按非递减顺序排序，以及一个字符 target。letters 里至少有两个不同的字符。
// 返回 letters 中大于 target 的最小的字符。如果不存在这样的字符，则返回 letters 的第一个字符。


/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
    let l = 0,
        r = letters.length - 1;
    while(l <= r) {
        const mid = Math.floor(l + (r - l) / 2);
        if (letters[mid] <= target) {
            l = mid + 1;
        } else {
            r = mid - 1;
        }
    }
    return l > letters.length - 1 ? letters[0] : letters[l];
};

var nextGreatestLetter = function (letters, target) {
    let left = 0, right = letters.length - 1;

    while (left < right) {
        let mid = left + Math.floor((right - left) / 2);

        if (letters[mid] > target) {
            right = mid;
        } else {
            left = mid + 1;
        }

    }
    return letters[left] > target ? letters[left] : letters[0];
};

var nextGreatestLetter = function (letters, target) {
    let len = letters.length;
    for (let i = 0; i < len; i++) {
        if (letters[i] > target) {
            return letters[i];
        }
    }
    return letters[0];
};