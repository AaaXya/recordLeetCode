/*
 * @lc app=leetcode.cn id=239 lang=javascript
 *
 * [239] 滑动窗口最大值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
    // [-6,-10,-7,-1,-9,9,-8,-4,10,-5,2,9,0,-7,7,4,-2,-10,8,7]\n7
    function fatigued(arr) {
        let max = arr[0],
            x = 0;
        for (let i = 0, len = arr.length; i < len; i++) {
            if (arr[i] >= max) {
                max = arr[i];
                x = i;
            }
        }
        return { index: x, max };
    }
    let res = [];
    let { max, index } = fatigued(nums.slice(0, k));
    while (nums.length >= k) {
        if (index == -1) {
            ({ max, index } = fatigued(nums.slice(0, k)));
        } else if (nums[k - 1] > max) {
            max = nums[k - 1];
            index = k - 1;
        }
        nums.shift();
        index--;
        res.push(max);
    }
    return res;
};
// @lc code=end
