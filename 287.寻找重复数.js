/*
 * @lc app=leetcode.cn id=287 lang=javascript
 *
 * [287] 寻找重复数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
    let fast = 0,
        slow = 0;
    while (true) {
        fast = nums[nums[fast]];
        slow = nums[slow];
        if (fast == slow) break;
    }
    fast = 0;
    while (true) {
        fast = nums[fast];
        slow = nums[slow];
        if (fast == slow) return fast;
    }
};
// @lc code=end
