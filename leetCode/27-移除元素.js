// 给你一个数组 nums 和一个值 val，你需要 原地 移除所有数值等于 val 的元素，并返回移除后数组的新长度。
// 不要使用额外的数组空间，你必须仅使用 O(1) 额外空间并 原地 修改输入数组。
// 元素的顺序可以改变。你不需要考虑数组中超出新长度后面的元素。

//时间复杂度：O(n)
//空间复杂度：O(1)
var removeElement = (nums, val) => {
    let k = 0;
    for(let i = 0;i < nums.length;i++){
        if(nums[i] != val){
            nums[k++] = nums[i]
        }
    }
    return k;
};

function removeElement(nums: number[], val: number): number {
    let slowIndex: number = 0, fastIndex: number = 0;
    while (fastIndex < nums.length) {
        if (nums[fastIndex] !== val) {
            nums[slowIndex++] = nums[fastIndex];
        }
        fastIndex++;
    }
    return slowIndex;
};

function removeElement(nums, val) {
    let k = 0
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] !== val) {
            nums[k++] = nums[i];
        }
    }
    return k;
}