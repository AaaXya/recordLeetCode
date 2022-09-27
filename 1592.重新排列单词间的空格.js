/*
 * @lc app=leetcode.cn id=1592 lang=javascript
 *
 * [1592] 重新排列单词间的空格
 */

// @lc code=start
/**
 * @param {string} text
 * @return {string}
 */
var reorderSpaces = function (text) {
    let words = [],
        buffer = '',
        counter = 0;
    for (let i = 0; i < text.length; i++) {
        const element = text[i];
        if (element == ' ') {
            counter++;
            if (!!buffer) {
                words.push(buffer);
                buffer = '';
            }
        } else {
            buffer += element;
        }
    }
    if (!!buffer) {
        words.push(buffer);
    }
    if (words.length <= 1) {
        return words[0] + ' '.repeat(counter);
    }
    const tail = counter % (words.length - 1);
    return words.join(' '.repeat((counter - tail) / (words.length - 1))) + ' '.repeat(tail);
};
// @lc code=end
