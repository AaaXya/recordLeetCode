/*
 * @lc app=leetcode.cn id=788 lang=javascript
 *
 * [788] 旋转数字
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var rotatedDigits = function (n) {
    let res = 0;
    for (let i = 1; i <= n; i++) {
        let state = false;
        let num = i;
        while (num >= 1) {
            let mant = num % 10;
            if (mant === 2 || mant === 5 || mant === 6 || mant === 9) {
                state = true;
            } else if (mant === 3 || mant === 4 || mant === 7) {
                state = false;
                break;
            }
            num = (num - mant) / 10;
        }
        if (state) res++;
    }
    return res;
};
// @lc code=end
