/*
 * @lc app=leetcode.cn id=75 lang=javascript
 *
 * [75] 颜色分类
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
    if (nums.length < 2) return;
    let left = 0,
        right = nums.length - 1;
    let i = 0;
    while (i <= right && left < right) {
        if (nums[right] == 2) {
            right--;
            continue;
        }
        if (nums[left] == 0) {
            left++;
            i++;
            continue;
        }
        if (nums[i] == 0) {
            [nums[left], nums[i]] = [nums[i], nums[left]];
            left++;
            i++;
            continue;
        } else if (nums[i] == 2) {
            [nums[i], nums[right]] = [nums[right], nums[i]];
            right--;
            continue;
        }
        i++;
    }
};
// @lc code=end
