/*
 * @lc app=leetcode.cn id=1640 lang=javascript
 *
 * [1640] 能否连接形成数组
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @param {number[][]} pieces
 * @return {boolean}
 */
var canFormArray = function (arr, pieces) {
    for (const x of pieces) {
        let ind = arr.findIndex((e) => e === x[0]);
        if (ind !== -1) {
            let i = 1;
            while (i < x.length) {
                if (arr[ind + i] !== x[i]) {
                    return false;
                }
                i++;
            }
        } else {
            return false;
        }
    }
    return true;
};
// @lc code=end
