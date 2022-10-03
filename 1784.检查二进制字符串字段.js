/*
 * @lc app=leetcode.cn id=1784 lang=javascript
 *
 * [1784] 检查二进制字符串字段
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var checkOnesSegment = function (s) {
    let state = false;
    for (const v of s) {
        if (v == 1 && state) {
            return false;
        } else if (v == 0) {
            state = true;
        }
    }
    return true;
};
// @lc code=end
