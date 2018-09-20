/**
 * Time: 2018-9-20
 */

/**
 * 反转字符串
 * 执行时间： 88ms
 * @param {string} s
 * @return {string}
 */
var reverseString = function(s) {
    var str = '';
    for (var i = s.length - 1; i >= 0; i--) {
        str = str + s[i];
    }

    return str;
};

/**
 * 反转字符串 - 第二种解法
 * 执行时间： 72ms
 * @param {string} s
 * @return {string}
 */
var reverseString2 = function(s) {
    var arr = str.split('');
    arr.reverse();
    return arr.join('');
}

/**
 * 反转字符串 - 第三种解法
 * 执行时间：76ms
 * @param {string} s
 * @return {string}
 */
var reverseString3 = function(s) {
    var strLen = s.length;
    var i = strLen - 1;
    var strArr = [];
    for(;i >= 0; i--) {
        strArr.push(s[i]);
    }
    return strArr.join('');
}
