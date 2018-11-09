/**
 * Time: 2018-11-8
 */

/**
 * 托普利茨矩阵 - 第一种解法
 * 执行时间：100ms
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function(matrix) {
    for (var i = 1; i < matrix.length; i++) {
        for (var j = 1; j < matrix[i].length; j++) {
            if (matrix[i][j] !== matrix[i - 1][j - 1]) {
                return false;
            }
        }
    }

    return true;
};
