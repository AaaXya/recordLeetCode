/*
 * @lc app=leetcode.cn id=1832 lang=typescript
 *
 * [1832] 判断句子是否为全字母句
 */

// @lc code=start
function checkIfPangram(sentence: string): boolean {
    return new Array(sentence.length)
        .fill(0)
        .reduce(
            (a, _, i) => ((a[sentence.charCodeAt(i) - 97] = true), a),
            new Array(26).fill(false)
        )
        .every();
}
// @lc code=end
