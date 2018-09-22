/**
 * Time: 2018-9-22
 */

/**
 * 最长特殊序列 I
 * 执行时间： 64ms
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
var findLUSlength = function(a, b) {
    var aLen = a.length;
    var bLen = b.length;

    if (aLen !== bLen) {
        return Math.max(aLen, bLen);
    } else if (a !== b) {
        return aLen;
    }

    return -1
};

/**
 * 最长特殊序列 I - 第二种解法
 * 执行时间： 48ms
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
var findLUSlength2 = function(a, b) {
    if (a === b) {
        return -1;
    }

    return Math.max(a.length, b.length);
};

/**
 * 最长特殊序列 I - 第三种解法
 * 执行时间： 48ms
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
var findLUSlength3 = function(a, b) {
    var count = 1
    ,   aLen = a.length, bLen = b.length
    ,   maxStr = aLen > bLen ? a : b
    ,   minStr = aLen > bLen ? b : a;

    if (a === b) return -1;
    if (a === '') return bLen;
    if (b === '') return aLen;

    if (maxStr.indexOf(minStr) > -1) return maxStr.length;

    for (var i = 0; i < maxStr.length - count; i++) {
        var maxSub = maxStr.slice(i, i + count);
        if (minStr.indexOf(maxSub) === -1) {
            i = -1;
        }
        count++;
    }
    return count;
};
