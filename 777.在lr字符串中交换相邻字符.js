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
        stationL = 0,
        stationR = 0;
    while (i < n) {
        if (stationL == 0 && stationR == 0) {
            if (end[i] == 'L') {
                if (stationR) {
                    return false;
                }
                stationL++;
            }
            if (start[i] == 'R') {
                if (stationL) {
                    return false;
                }
                stationR++;
            }
            if (end[i] == 'R') {
                stationR--;
            }
            if (start[i] == 'L') {
                stationL--;
            }
        } else {
            if (end[i] == 'R') {
                stationR--;
            }
            if (start[i] == 'L') {
                stationL--;
            }
            if (end[i] == 'L') {
                if (stationR) {
                    return false;
                }
                stationL++;
            }
            if (start[i] == 'R') {
                if (stationL) {
                    return false;
                }
                stationR++;
            }
        }
        if (stationL < 0 || stationR < 0) return false;
        i++;
    }
    return stationL == 0 && stationR == 0;
};
// @lc code=end
