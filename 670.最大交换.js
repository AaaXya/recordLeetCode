/*
 * @lc app=leetcode.cn id=670 lang=javascript
 *
 * [670] 最大交换
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number}
 */
var maximumSwap = function (num) {
    let scatter = [];
    const truncation = (x) => {
        if (x < 10) {
            scatter.unshift(x);
        } else {
            const tenAbove = Math.floor(x / 10);
            scatter.unshift(x - tenAbove * 10);
            return truncation(tenAbove);
        }
    };
    truncation(num);
    let minKey = null,
        maxKey = null;
    for (let i = 1; i < scatter.length; i++) {
        const element = scatter[i];
        const before = scatter[i - 1];
        if (element > before) {
            minKey = i - 1;
            maxKey = i++;
            let max = element;
            while (i < scatter.length) {
                if (scatter[i] >= max) {
                    max = scatter[i];
                    maxKey = i;
                }
                i++;
            }
        }
    }
    if (minKey != null) {
        let i = minKey;
        while (i >= 0) {
            if (scatter[i] < scatter[maxKey]) {
                minKey = i;
            }
            i--;
        }
        [scatter[minKey], scatter[maxKey]] = [scatter[maxKey], scatter[minKey]];
    }
    return scatter.reduce((a, b) => a * 10 + b);
};
// @lc code=end
