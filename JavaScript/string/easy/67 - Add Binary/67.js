/**
 * Time: 2018-9-14
 */

/**
 * 二进制求和
 * 执行时间： 104ms
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var addBinary = function(a, b) {
    var count = 0;  // 记录进位
    var result = '';

    while (a.length > b.length) {
        b = '0' + b;
    }

    while (a.length < b.length) {
        a = '0' + a;
    }

    for (var i = a.length - 1; i >= 0; i--) {
        var curA = Number(a.charAt(i));
        var curB = Number(b.charAt(i));
        var sum = curA + curB + count;

        if (sum >= 2) {
            sum = sum - 2;
            result = sum + result;
            count = 1;
        } else {
            result = String(sum) + result;
            count = 0;
        }
    }

    if (count > 0) {
        result = '1' + result;
    }

    return result;
};


/**
 * 二进制求和 - 第二种解法
 * 执行时间： 60ms
 * @param {string} a
 * @param {string} b
 * @return {number} result
 */
var addBinary2 = function(a, b) {
    var result = '';
    var count = 0;
    var aLen = a.length - 1;
    var bLen = b.length - 1;

    while (aLen >= 0 || bLen >= 0 || count !== 0) {
        let a1 = 0;
        if (aLen >= 0) {
            a1 = Number(a[aLen]);
        }
        let b1 = 0;
        if (bLen >= 0) {
            b1 = Number(b[bLen]);
        }
        result = (a1 + b1 + count) % 2 + result;
        count = 0 | ((a1 + b1 + count) / 2);
        aLen--;
        bLen--;
    }

    return result;
};
