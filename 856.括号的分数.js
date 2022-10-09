/*
 * @lc app=leetcode.cn id=856 lang=javascript
 *
 * [856] 括号的分数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var scoreOfParentheses = function (s) {
    if (s < 2) {
        return 0;
    }
    let position = 1;
    if (s[position] == ')') {
        return 1 + scoreOfParentheses(s.substring(2));
    }
    let layer = position;
    while (layer != 0) {
        if (s[position] == ')') {
            layer--;
        } else if (s[position] == '(') {
            layer++;
        }
        position++;
    }
    position--;
    return (
        2 * scoreOfParentheses(s.substring(1, position)) +
        scoreOfParentheses(s.substring(position + 1))
    );
};
// @lc code=end
