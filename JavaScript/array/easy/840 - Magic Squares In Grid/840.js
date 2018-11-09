/**
 * Time: 2018-11-9
 */

/**
 * 矩阵中的幻方 - 第一种解法
 * 执行时间：68ms
 * @param {number[][]} grid
 * @return {number}
 */
var numMagicSquaresInside = function(grid) {
    if (grid.length < 3) return 0;

    var sum = 0;
    for (var i = 1; i < grid.length - 1; i++) {
        for (var j = 1; j < grid.length - 1;) {
            if (grid[i][j] == 5 && isLawfulNum(grid, j, i)) {
                sum++;
                j += 2;
            } else {
                j++;
            }
        }
    }

    return sum;
};

var isLawfulNum = function (grid, x, y) {
    var num1 = grid[y - 1][x - 1],
        num2 = grid[y - 1][x],
        num3 = grid[y][x - 1],
        num4 = grid[y - 1][x + 1],
        num5 = grid[y][x + 1],
        num6 = grid[y + 1][x - 1],
        num7 = grid[y + 1][x],
        num8 = grid[y + 1][x + 1];

    if (num1 % 5 != 0
        && num2 % 5 != 0
        && num3 % 5 != 0
        && num4 % 5 != 0) {

        if (10 - num1 == num8
            && 10 - num2 == num7
            && 10 - num3 == num5
            && 10 - num4 == num6) {

            return true;
        }
    }

    return false;
}
/*

1~9不重复的九个元素的横斜竖相加都相等 ，故九宫格最中间一定是5才能满足条件；同时每一行的和一定是15，故 每两个 跨越5的相对着的数字的和一定是10；

*/
