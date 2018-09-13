/**
 * Time: 2018-9-13
 */

/**
 * 最后一个单词的长度
 * 执行时间： 64ms
 * @param {string} s
 */
var lengthOfLastWord = function(str) {
    const arr = str.trim().split(' ');
    return arr[arr.length - 1].length;
};

/**
 * 最后一个单词的长度 - 第二种解法
 * 执行时间： 64ms
 * @param {string} s
 */
var lengthOfLastWord2 = function(str) {
    const len = str.length;
    let word = '';

    for (i = len - 1; i > -1; --i) {
        if (str[i] !== ' ') word = str[i] + word;
        if ((str[i] === ' ' && word !== '' && i !== len - 1) || i === 0) {
            return word.length;
        }
    }

    return 0;
};

/**
 * 最后一个单词的长度 - 第三种解法
 * 执行时间： 48ms
 * @param {string} s
 */
var lengthOfLastWord3 = function(s) {
    if (!s) return 0;
    let preLen = 0;
    let curLen = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] == ' ') {
            curLen = 0;
        } else {
            curLen++;
            preLen = curLen;
        }
    }
    return preLen;
};
