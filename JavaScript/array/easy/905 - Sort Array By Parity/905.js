/**
 * Time: 2018-11-19
 */

/**
 * 按奇偶排序数组 - 第一种解法
 * 执行时间：96ms
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function(A) {
    var odd = [], even = [];
    for (var i = 0; i < A.length; i++) {
        if (A[i] % 2 === 0) {
            even.push(A[i]);
        } else {
            odd.push(A[i]);
        }
    }

    return even.concat(odd);
};

/**
 * 按奇偶排序数组 - 第二种解法
 * 执行时间：80ms
 * @param {number[]} A
 * @return {number[]}
 */
let sortArrayByParity = function (A) {
    let result = [];
    for (let i = 0, len = A.length; i < len; i += 1) {
        A[i] % 2 === 0 ? result.unshift(A[i]) : result.push(A[i]);
    }
    return result;
};

/**
 * 按奇偶排序数组 - 第三种解法
 * 执行时间：92ms
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function (A) {
    let c = 0 // 一个游标，指向已处理结果中的第一个奇数的位置
    let n

    for (let i = 0, l = A.length; i < l; i++) {
        n = A[i]

        if (n % 2 === 0) {
            A[i] = A[c]
            A[c] = n

            c++
        }
    }

    return A
};
