/**
 * Time: 2018-9-28
 */

/**
 * 计数二进制字串
 * 执行时间：104ms
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function(s) {
    const length = s.length;
    let result = 0, ping = 0, pong = 0;
    for (let i = 0; i < length; i++) {
        if (s[i] === '0') {
            pong = (i === 0 || s[i - 1] === '1') ? 1 : pong + 1;
            result += (pong <= ping) ? 1 : 0;
        } else {
            ping = (i === 0 || s[i - 1] === '0') ? 1 : ping + 1;
            result += (ping <= pong) ? 1 : 0;
        }
    }

    return result;
};

/**
 * 计数二进制字串 - 第二种方法
 * 执行时间：68ms
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings2 = function (s) {
    let count = 0;
    let prelen = 0;
    let curlen = 1;

    for (let i = 1; i < s.length; i++) {
        if (s[i] == s[i - 1]) {
            curlen++;
        } else {
            prelen = curlen;
            curlen = 1;
        }
        if (prelen >= curlen) {
            count++;
        }
    }
    return count;
}

/**
 * 计数二进制字串 - 第三种方法
 * 执行时间：68ms
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function (s) {
    var result = [];
    for (var i = 0; i < s.length; i++) {
        var count = 1;
        for (var j = i + 1; j < s.length; j++) {
            if (s[i] === s[j]) {
                count++;
            } else {
                break;
            }
        }
        i += count - 1;
        result.push(count);
    }
    var sum = 0;
    for (var k = 1; k < result.length; k++) {
        sum += Math.min(result[k], result[k - 1]);
    }
    return sum;
}
