// 某班级 n 位同学的学号为 0 ~ n-1。点名结果记录于升序数组 records。假定仅有一位同学缺席，请返回他的学号。
/**
 * @param {number[]} records
 * @return {number}
 */
var takeAttendance = function(records) {
    let mid, left = 0, right =records.length -1
    while(left <= right) {
        mid = Math.floor((right - left) / 2) + left
        if(records[mid] == mid){
            left = mid + 1
        }else {
            right = mid - 1
        }
    }
    return left
};