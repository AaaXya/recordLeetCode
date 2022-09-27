/*
 * @lc app=leetcode.cn id=1598 lang=javascript
 *
 * [1598] 文件夹操作日志搜集器
 */

// @lc code=start
/**
 * @param {string[]} logs
 * @return {number}
 */
var minOperations = function (logs) {
    let steps = 0;
    for (const x of logs) {
        if (x == './') {
            continue;
        } else if (x == '../') {
            steps = Math.max(steps - 1, 0);
        } else {
            steps++;
        }
    }
    return steps;
};
// @lc code=end
