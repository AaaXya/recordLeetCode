/*
 * @lc app=leetcode.cn id=777 lang=javascript
 *
 * [777] 在LR字符串中交换相邻字符
 */

// @lc code=start
/**
 * @param {string} start
 * @param {string} end
 * @return {boolean}
 */
var canTransform = function (start, end) {
    let i = 0,
        n = start.length,
        station = [];
    while (i < n) {
        const [ei, si] = [end[i], start[i]];
        if (station.length == 0) {
            if (ei == 'L') {
                if (station[0] == 'R') return false;
                station.push('L');
            }
            if (si == 'R') {
                if (station[0] == 'L') return false;
                station.push('R');
            }
            if (ei == 'R') {
                if (station.pop() != 'R') return false;
            }
            if (si == 'L') {
                if (station.pop() != 'L') return false;
            }
        } else {
            if (ei == 'R') {
                if (station.pop() != 'R') return false;
            }
            if (si == 'L') {
                if (station.pop() != 'L') return false;
            }
            if (si == 'R') {
                if (station[0] == 'L') return false;
                station.push('R');
            }
            if (ei == 'L') {
                if (station[0] == 'R') return false;
                station.push('L');
            }
        }
        i++;
    }
    return station.length == 0;
};
// @lc code=end
