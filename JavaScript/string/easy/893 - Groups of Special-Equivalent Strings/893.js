/**
 * Time: 2018-9-29
 */

/**
 * 特殊等价字符串组
 * 执行时间： 136ms
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
const numSpecialEquivGroups2 = A => {
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

/**
 * 特殊等价字符串组 - 第三种解法
 * 执行时间： 68ms
 * @param {string[]} A
 * @return {number}
 */
var numSpecialEquivGroups3 = function (A) {
    let p = {};
    for (let i = 0; i < A.length; i++) {
        let q = checkStrIsEquiv(A[i]);
        if (p[q]) {
            p[q]++;
        } else {
            p[q] = 1;
        }
    }
    return Object.keys(p).length;
}

var checkStrIsEquiv = function (a) {
    let odda = [];
    let evena = [];
    for (let i = 0; i < a.length; i++) {
        if (i % 2 == 1) {
            odda[a.charCodeAt(i) - 97] = 1;
        } else {
            evena[a.charCodeAt[i] - 97] = 1;
        }
    }
    let s = '';
    let len = odda.length > evena.length ? odda.length : evena.length;
    for (let i = 0; i < len; i++) {
        s += (0 | odda[i]);
        s += (0 | even[i]);
    }
    return s;
}

/**
 * 特殊等价字符串组 - 第四种解法
 * 执行时间： 112ms
 * @param {string[]} A
 * @return {number}
 */
var numSpecialEquivGroups4 = function (A) {
    function p(a, b) { return a < b; }

    const s = new Set();
    for (let i = 0; i < A.length; i++) {
        let a = [];
        let b = [];
        for (let j = 0; j < A[i].length; j++) {
            if (j % 2 === 0) {
                a[a.length] = A[i].charCodeAt(j);
            } else {
                b[b.length] = A[i].charCodeAt(j);
            }
        }
        a.sort(p);
        b.sort(p);
        s.add(`${a.join(',')}|${b.join(',')}`);
    }
    return s.size();
}
