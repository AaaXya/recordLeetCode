/*
 * @lc app=leetcode.cn id=870 lang=javascript
 *
 * [870] 优势洗牌
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var advantageCount = function (nums1, nums2) {
    let arr = [],
        clone = nums2.slice(0);
    nums1.sort((a, b) => a - b);
    clone.sort((a, b) => b - a);
    nums2.forEach((x) => {
        const y = nums1.find((e) => e > x);
        if (!y || (x == clone[0] && nums1[nums1.length - 1] < x)) {
            clone.shift();
            arr.push(nums1.shift());
        } else {
            arr.push(...nums1.splice(nums1.indexOf(y), 1));
        }
    });
    return arr;
};
// @lc code=end
