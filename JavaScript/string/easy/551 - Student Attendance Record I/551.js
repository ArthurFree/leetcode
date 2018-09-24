/**
 * Time: 2018-9-23
 */

/**
 * 反转字符串 II
 * 执行时间： 64ms
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
    var late = 'LLL';
    if (s.indexOf(late) > -1) return false;
    if (s.indexOf('A') !== s.lastIndexOf('A')) return false;

    return true;
};

/**
 * 反转字符串 II - 第二种解法
 * 执行时间： 72ms
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
    let reg = /^.*A.*A.*$/;
    let reg2 = /^.*L{3}.*$/;
    return !(reg.test(s) || reg2.test(s));
};
