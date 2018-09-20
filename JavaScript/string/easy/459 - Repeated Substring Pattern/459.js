/**
 * Time: 2018-9-20
 */

/**
 * 重复的子字符串
 * 执行时间： 212ms
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
    var temp = s[0];
    var str = '';

    for (var i = 1; i < s.length; i++) {
        var group = s.length % temp.length;
        var g = Math.floor(s.length / temp.length);
        str = '';
        if (group === 0) {
            for (var j = 0; j < g; j++) {
                str += temp;
            }
            if (str === s) return true
        }

        if (i !== s.length - 1) {
            temp += s[i];
        }
    }

    return false;
};

/**
 * 重复的子字符串 - 第二种解法
 * 执行时间： 72ms
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern2 = function(s) {
    var s1 = s.substr(1) + s.slice(0, s.length - 1);
    if (s1.indexOf(s) > -1) {
        return true;
    }
    return false;
};

/**
 * 重复的子字符串 - 第三种解法
 * 执行时间： 72ms
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern2 = function(s) {
    for (let i = 2; i <=s.length; i++) {
        if (s.length % i === 0) {
            let p = s.substring(0, s.length / i).repeat(i);
            if (p === s) {
                return true;
            }
        }
    }
    return false;
};
