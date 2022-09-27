/*
 * @lc app=leetcode.cn id=1608 lang=javascript
 *
 * [1608] 特殊数组的特征值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var specialArray = function (nums) {
    nums.sort((a, b) => a - b);
    // nums = [0,3,6,7,7] [0,1] [0,3,6,7]
    // console.log(nums);
    let num = 0;
    for (let i = nums.length - 1; i >= 0; i--) {
        num++;

        const element = nums[i];
        if (element == nums[i - 1]) {
            continue;
        }
        const judge = nums[i - 1] ? (nums[i - 1] < num ? true : false) : true;
        if (element >= num && judge) {
            return num;
        }
    }
    return -1;
};
// @lc code=end
