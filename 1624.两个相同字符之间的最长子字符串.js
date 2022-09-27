/*
 * @lc app=leetcode.cn id=1624 lang=javascript
 *
 * [1624] 两个相同字符之间的最长子字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var maxLengthBetweenEqualCharacters = function (s) {
    let end = s.length - 1;
    let max = null;
    while (end > 0) {
        for (let i = 0; i < end; i++) {
            if (s[i] === s[end]) {
                max = max > end - i - 1 ? max : end - i - 1;
                break;
            }
        }
        end--;
    }
    if (max === null) {
        return -1;
    }
    return max;
};
// @lc code=end
