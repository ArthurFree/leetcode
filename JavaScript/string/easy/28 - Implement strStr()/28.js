/**
 * Time: 2018-9-14
 */

/**
 * 实现 strStr() 函数
 * 执行时间： 104ms
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    return haystack.indexOf(needle);
};


/**
 * 实现 strStr() 函数 - 第二种解法
 * 执行时间： 112ms
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr2 = function(haystack, needle) {
    var hayStackLen = haystack.length;
    var needleLen = needle.length;
    var i = 0, len = 0;
    if (needleLen > hayStackLen) return -1;
    while (i <= (hayStackLen - needleLen)) {

        if (needle === haystack.substring(i, i + needleLen)) return i;
        i++;
    }
    return -1;
};
