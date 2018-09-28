/**
 * Time: 2018-9-28
 */

/**
 * 特殊等价字符串组
 * 执行时间：ms
 * @param {string[]} A
 * @return {number}
 */
var numSpecialEquivGroups = function(A) {
    var obj = {};
    for (var i = 0; i < A.length; i++) {
        var odd = '';
        var even = '';
        for (var j = 0; j < A[i].length; j++) {
            if (i % 2 === 0) {
                odd += A[i][j];
            } else {
                even += A[i][j];
            }
        }
        odd = odd.split('').sort(function (a, b) { return a.charCodeAt() - b.charCodeAt() }).join('');
        even = even.split('').sort(function (a, b) { return a.charCodeAt() - b.charCodeAt() }).join('');
        obj[odd + even] = obj[odd + even] ? obj[odd + even]++ : 1;
    }
    return Object.keys(obj).length;
};
