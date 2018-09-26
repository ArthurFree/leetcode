/**
 * Time: 2018-9-26
 */

/**
 * 验证回文字符串 II
 * 执行时间：124ms
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    function match(i, j) {
        while (i < j && s[i] === s[j]) { i++; j--; }
        return [i, j];
    }

    let [i, j] = match(0, s.length - 1);
    if (i >= j) return true;

    let [a, b] = match(i + 1, j);
    if (a >= b) return true;

    [a, b] = match(i, j - 1);
    if (a >= b) return true;

    return false;
};

/**
 * 验证回文字符串 II
 * 执行时间：100ms
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
    let len = 0 | (s.length / 2);
    for (let i = 0; i < len; i++) {
        let j = s.length - 1 - i;
        if (s[i] != s[j]) {
            return isPalindromeRange(s, i + 1, j) || isPalindromeRange(s, i, j - 1);
        }
    }
    return true;
}

var isPalindromeRange = function (s, i, j) {
    for (let k = i; k <= parseInt(i + (j - 1) / 2); k++) {
        if (s[k] != s[j - k + i]) {
            return false;
        }
    }
    return true;
}
