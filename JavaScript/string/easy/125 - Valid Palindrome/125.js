/**
 * Time: 2018-9-14
 */

/**
 * 验证回文串
 * 执行时间： 504ms
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    var len = s.length, i = 0, j = len - 1;

    if (s === '') return true;
    while(i < j) {

        var start = s.charAt(i).toLowerCase();
        var end = s.charAt(j).toLowerCase();
        var startIsLetter = start.match(/^[a-zA-Z0-9]$/);
        var endIsLetter = end.match(/^[a-zA-Z0-9]$/);

        if (!startIsLetter) {
            i++;
            continue;
        } else if (!endIsLetter) {
            j--;
            continue;
        } else if (start !== end) {
            return false;
        } else {
            i++;
            j--;
        }
    }

    return true;
};


/**
 * 验证回文串 - 第二种解法
 * 执行时间： 504ms
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome2 = function(s) {
    var str = '', i, j;

    if (s === '') return true;

    str = s.replace(new RegExp('[^a-zA-Z0-9]', 'g'), '').toLowerCase();
    i = 0;
    j = str.length - 1;

    while (j > i) {
        if (str[i] === str[j]) {
            i++;
            j--;
        } else {
            return false;
        }
    }

    return true;
};

/**
 * 验证回文串 - 第三种解法
 * 执行时间： 504ms
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome2 = function(s) {
    var str = '';

    if (s === '') return true;

    str = s.toLowerCase().replace(/\W|\s+/g, '');


    for (var i = 0; i < Math.ceil(s.length / 2); i++) {
        if (s[i] !== s[len-i-1]) return false;
    }

    return true;
};
