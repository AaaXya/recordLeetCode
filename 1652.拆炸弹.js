/*
 * @lc app=leetcode.cn id=1652 lang=javascript
 *
 * [1652] 拆炸弹
 */

// @lc code=start
/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
var decrypt = function (code, k) {
    let direction = true;
    if (k < 0) {
        direction = false;
        k *= -1;
    }
    return code.map((x, i, a) => {
        let v = 0;
        for (let j = 1; j <= k; j++) {
            v = v + (direction ? a[(j + i) % a.length] : a[(i - j + a.length) % a.length]);
        }
        return v;
    });
};
// @lc code=end
