/*
 * @lc app=leetcode.cn id=1812 lang=javascript
 *
 * [1812] 判断国际象棋棋盘中一个格子的颜色
 */

// @lc code=start
/**
 * @param {string} coordinates
 * @return {boolean}
 */
var squareIsWhite = function (coordinates) {
    return (coordinates.charCodeAt(0) % 2 === 0) ^ (coordinates.charCodeAt(1) % 2 === 0);
};
// @lc code=end
