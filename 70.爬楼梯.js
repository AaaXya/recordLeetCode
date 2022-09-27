/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    let a = 0,
        b = 1,
        c;
    while (n != 0) {
        c = a + b;
        a = b;
        b = c;
        n--;
    }
    return c;
};
// @lc code=end
