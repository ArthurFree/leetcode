/**
 * Time: 2018-9-28
 */

/**
 * 旋转数字
 * 执行时间：1280ms
 * @param {number} N
 * @return {number}
 */
var rotatedDigits = function(N) {
    // var goodNum = [0, 1, 2, 5, 6, 8, 9];
    var count = 0;
    var goodMap = {
        0: 0,
        1: 1,
        2: 5,
        5: 2,
        6: 9,
        8: 8,
        9: 6,
    };
    for (var i = 1; i <= N; i++) {
        var item = i.toString();
        var str = '';
        for (var j = 0; j < item.length; j++) {
            if (goodMap[item[j]] == undefined) {
                break;
            } else {
                str += goodMap[item[j]];
            }
        }
        if (str.length === item.length && str !== item) {
            count++;
        }
    }

    return count;
};

/**
 * 旋转数字 - 第二种解法
 * 执行时间：60ms
 * @param {number} N
 * @return {number}
 */
var rotatedDigits2 = function (N) {
    let result = 0;
    for (let i = 1; i <= N; i++) {
        const string = '' + i;
        if (!/['3''4''7]/g.test(string) && /['2''5''6''9']/g.test(string)) {
            result++;
        }
    }
    return result;
}

/**
 * 旋转数字 - 第二种解法
 * 执行时间：60ms
 * @param {number} N
 * @return {number}
 */
var routatedDigits = function (N) {
    let r = 0;
    for (let i = 1; i <= N; i++) {
        if (/^[0182569]+$/.test(i) && /[2569]/.test(i)) {
            r++;
        }
    }
    return r;
}
