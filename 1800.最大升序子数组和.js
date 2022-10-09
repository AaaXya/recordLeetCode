/*
 * @lc app=leetcode.cn id=1800 lang=javascript
 *
 * [1800] 最大升序子数组和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAscendingSum = function (nums) {
    let end = Infinity,
        max = 0,
        res = 0;
    for (const x of nums) {
        if (x <= end) {
            res = x;
            max = Math.max(max, x);
        } else {
            max = Math.max(max, (res += x));
        }
        end = x;
    }
    return max;
};
// @lc code=end
