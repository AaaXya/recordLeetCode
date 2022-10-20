/*
 * @lc app=leetcode.cn id=779 lang=javascript
 *
 * [779] 第K个语法符号
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kthGrammar = function (n, k) {
    return n == 1 ? 0 : (k % 2 == 0 ? 1 : 0) ^ kthGrammar(n - 1, Math.floor((k + 1) / 2));
};
// @lc code=end
