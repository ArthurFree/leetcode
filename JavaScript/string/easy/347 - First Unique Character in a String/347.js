/**
 * Time: 2018-9-16
 */

/**
 * 字符串中的第一个唯一字符
 * 执行时间： 效率太低
 * @param {string} s
 * @return {number}
 */
/* var firstUniqChar = function(s) {
    for (var i = 0, len = s.length; i < len; i++) {
        reg = new RegExp(s[i], 'g');
        var arrLength = s.match(reg).length;
        if (arrLength === 1) {
            return i;
        }
    }

    return -1;
}; */

/* var firstUniqChar = function(s) {
    for (var i = 0, len = s.length; i < len; i++) {
        var arrLen = s.split(s[i]).length;
        if (arrLen === 2) {
            return i;
        }
    }

    return -1;
}; */

/**
 * 字符串中的第一个唯一字符
 * 执行时间： 272ms
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    var arr = s.split('');

    for (var i = 0; i < arr.length; i++) {
        var item = s[i];
        if (arr.indexOf(item) === arr.lastIndexOf(item)) {
            return i;
        }
    }

    return -1;
};

/**
 * 字符串中的第一个唯一字符 - 第二种解法
 * 执行时间： 56ms
 * @param {string} s
 * @return {number}
 */
var firstUniqChar2 = function(s) {
    let firstUniqChar = s.length;
    let alpha = 'abcdefghijklmnopqrstuvwxyz';
    for (let i = 0; i < alpha.length; i++) {
        let index = s.indexOf(alpha[i]);
        if (index !== -1 && index === s.lastIndexOf(alpha[i])) {
            if (index < firstUniqChar) {
                firstUniqChar = index;
            }
        }
    }
    return firstUniqChar === s.length ? -1 : firstUniqChar;
};

/**
 * 字符串中的第一个唯一字符 - 第三种解法
 * 执行时间： 84ms
 * @param {string} s
 * @return {number}
 */
var firstUniqChar3 = function(s) {
    for (var i = 0; i < s.length; i++) {
        if (s.indexOf(s[i] === i) && s.indexOf(s[i], i+1) === -1) {
            return i;
        }
    }

    return -1;
};
