/**
 * Time: 2018-9-29
 */

/**
 * 特殊等价字符串组
 * 执行时间：ms
 * @param {string[]} A
 * @return {number}
 */
var numSpecialEquivGroups = function(A) {
    return A.reduce((prev, curr) => {
        let left = '';
        let right = '';
        for (let i = 0; i < curr.length; i++) {
            i % 2 === 0 ? left += curr[i] : right += curr[i];
        }
        left = [...left].sort().join('');
        right = [...right].sort().join('');
        for (let i = 0; i < prev.length; i++) {
            if (prev[i][0] === left && prev[i][1] === right) {
                return prev;
            }
        }
        prev.push([left, right]);
        return prev;
    }, []).length;
};

/**
 * 特殊等价字符串组 - 第二种解法
 * 执行时间：ms
 * @param {string[]} A
 * @return {number}
 */
const numSpecialEquivGroups = A => {
    const s = new Set();
    A.forEach(a => {
        const odd = [];
        const even = [];
        for (let i = 0; i < a.length; i++) {
            i % 2 ? odd.push(a[i]) : even.push(a[i]);
        }
        odd.sort();
        even.sort();
        s.add(`${[...odd, ...even]}`);
    });
    return s.size;
}
// https://leetcode.com/problems/groups-of-special-equivalent-strings/discuss/164241/Javascript-not-the-fastest-but-I-like-it/169674
