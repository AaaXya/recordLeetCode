/*
 * @lc app=leetcode.cn id=1636 lang=javascript
 *
 * [1636] 按照频率将数组升序排序
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function (nums) {
    let mapd = {};
    for (const x of nums) {
        if (mapd.hasOwnProperty(x)) {
            mapd[x]++;
        } else {
            mapd[x] = 1;
        }
    }
    return nums.sort((a, b) => (mapd[a] == mapd[b] ? b - a : mapd[a] - mapd[b]));
};
// @lc code=end
