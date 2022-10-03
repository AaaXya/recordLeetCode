/*
 * @lc app=leetcode.cn id=268 lang=javascript
 *
 * [268] 丢失的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
    let ans = 0;
    for (let i = 0; i <= nums.length; i++) {
        ans ^= i;
    }
    nums.forEach((x) => (ans ^= x));
    return ans;
};
// @lc code=end
