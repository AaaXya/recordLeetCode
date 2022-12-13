/*
 * @lc app=leetcode.cn id=1781 lang=javascript
 *
 * [1781] 所有子字符串美丽值之和
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var beautySum = function (s) {
    return new Array(s.length - 1)
        .fill(s.split(''))
        .map((x, i) => x.slice(i))
        .reduce(
            (af, now) => (
                now
                    .reverse()
                    .slice(0, -2)
                    .reduce(
                        (a, b) => {
                            const arr = Object.values(a);
                            let max = arr[0],
                                min = max;
                            for (const v of arr)
                                if (v > max) max = v;
                                else if (v < min) min = v;
                            if (!--a[b]) delete a[b];
                            af += max - min;
                            return a;
                        },
                        now.reduce((a, b) => {
                            if (a.hasOwnProperty(b)) a[b]++;
                            else a[b] = 1;
                            return a;
                        }, {})
                    ),
                af
            ),
            0
        );
};
// @lc code=end
