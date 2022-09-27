/*
 * @lc app=leetcode.cn id=240 lang=javascript
 *
 * [240] 搜索二维矩阵 II
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    let row = matrix[0].length - 1,
        col = 0;
    while (row >= 0 && col <= matrix.length - 1) {
        const val = matrix[col][row];
        if (val < target) {
            col++;
        } else if (val > target) {
            row--;
        } else if (val == target) {
            return true;
        }
    }
    return false;
};
// @lc code=end
