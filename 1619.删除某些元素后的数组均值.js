/*
 * @lc app=leetcode.cn id=1619 lang=javascript
 *
 * [1619] 删除某些元素后的数组均值
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number}
 */
var trimMean = function (arr) {
    arr.sort((a, b) => a - b);
    const len = arr.length / 20;
    return arr.slice(len, -len).reduce((a, b) => a + b) / (len * 18);
};
// @lc code=end
