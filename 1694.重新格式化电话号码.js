/*
 * @lc app=leetcode.cn id=1694 lang=javascript
 *
 * [1694] 重新格式化电话号码
 */

// @lc code=start
/**
 * @param {string} number
 * @return {string}
 */
var reformatNumber = function (number) {
    let res = '';
    number = number.replace(/\D/g, '');
    while (number.length > 4) {
        res += number.substring(0, 3) + '-';
        number = number.substring(3);
    }
    if (number.length == 4) {
        res += number.substring(0, 2) + '-';
        number = number.substring(2);
    }
    return res + number;
};
// @lc code=end
