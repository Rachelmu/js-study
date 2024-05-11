// 仓库管理员以数组 stock 形式记录商品库存表。stock[i] 表示商品 id，可能存在重复。原库存表按商品 id 升序排列。现因突发情况需要进行商品紧急调拨，管理员将这批商品 id 提前依次整理至库存表最后。请你找到并返回库存表中编号的 最小的元素 以便及时记录本次调拨。

/**
 * @param {number[]} stock
 * @return {number}
 */
var stockManagement = function(stock) {
    let low = 0;
    let high = stock.length - 1;
    while (low < high) {
        const pivot = low + Math.floor((high - low) / 2);
        if (stock[pivot] < stock[high]) {
            high = pivot;
        } else if (stock[pivot] > stock[high]) {
            low = pivot + 1;
        } else {
            high -= 1;
        }
    }
    return stock[low];
}