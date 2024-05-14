// 给你两个整数数组 nums1 和 nums2 ，请你以数组形式返回两数组的交集。返回结果中每个元素出现的次数，应与元素在两个数组中都出现的次数一致（如果出现次数不一致，则考虑取较小值）。可以不考虑输出结果的顺序。

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    nums1.sort((a,b) => a-b)
    nums2.sort((a,b) => a-b)
    let i = 0, j = 0, k = 0,arr =[]
    while(i< nums1.length && j< nums2.length){
        if(nums1[i] < nums2[j]){
            ++i;
        }else if(nums1[i] > nums2[j]){
            ++j;
        }else{
            arr[k++] = nums1[i++]
            ++j;
        }
    }
    return arr
};