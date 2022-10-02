/*
 * @lc app=leetcode.cn id=71 lang=javascript
 *
 * [71] 简化路径
 */

// @lc code=start
/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
    let arr = path.split('/'),
        queue = [];
    arr.forEach((x) => {
        if (x == '..') {
            queue.pop();
        } else if (x == '.' || x == '') {
        } else {
            queue.push(x);
        }
    });
    return '/' + queue.join('/');
};
// @lc code=end
