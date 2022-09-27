/*
 * @lc app=leetcode.cn id=154 lang=javascript
 *
 * [154] 寻找旋转排序数组中的最小值 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
    let left = 0,
        right = nums.length - 1;
    do {
        const mid = Math.floor((right + left) / 2);
        if (nums[right] > nums[left]) {
            return nums[left];
        } else {
            if (nums[mid] < nums[left]) {
                right = mid;
            } else if (nums[mid] > nums[right]) {
                left = mid;
            } else {
                left++;
            }
        }
    } while (left < right - 1);
    return nums[right];
};
// @lc code=end
