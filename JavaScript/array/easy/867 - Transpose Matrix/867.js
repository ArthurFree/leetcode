/**
 * Time: 2018-11-13
 */

/**
 * 转置矩阵 - 第一种解法
 * 执行时间：108ms
 * @param {number[][]} A
 * @return {number[][]}
 */
var transpose = function(A) {
    var h = A.length;
    var w = A[0].length;
    var arr = [];
    var res = [];

    for (var i = 0; i < w; i++) {
        arr = [];
        for (var j = 0; j < h; j++) {
            arr.push(A[j][i]);
        }
        res.push(arr);
    }

    return res;
};

/*

[
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

=>

[
    [1,4,7],
    [2,5,8],
    [3,6,9]
]

*/

/**
 * 转置矩阵 - 第二种解法
 * 执行时间：68ms
 * @param {number[][]} A
 * @return {number[][]}
 */
var transpose = function (A) {
    let D = [];
    for (let i = 0; i < A.length; i++) {
        for (let j = 0; j < A[i].length; j++) {
            if (!D[j]) {
                D[j] = [];
            }
            D[j][i] = A[i][j];
        }
    }
    return D;
};

/**
 * 转置矩阵 - 第三种解法
 * 执行时间：88ms
 * @param {number[][]} A
 * @return {number[][]}
 */
var transpose = function(A) {
    const col = A.length;
    const row = A[0].length;
    const res = [...Array(row)].map(() => []);
    for (let i = 0; i < col; i++) {
      for (let j = 0; j < row; j++) {
        res[j][i] = A[i][j];
      }
    }
    return res;
  };
