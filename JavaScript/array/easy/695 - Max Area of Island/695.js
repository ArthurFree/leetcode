/**
 * Time: 2018-11-5
 */

/**
 * 岛屿的最大面积 - 第一种解法
 * 执行时间：100ms
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    var area = 0;
    var temp = 0;
    for (var i = 0; i < grid.length; i++) {
        for (var j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === 1) {
                temp = findNeighbor(grid, j, i);
                area = Math.max(area, temp);
            }
        }
    }

    return area;
};

function findNeighbor(grid, x, y) {
    var sum = 1;
    if (grid[y][x] === 0) {
        return 0;
    } else {
        grid[y][x] = 0;
    }
    if (y <= grid.length - 2) {
        sum += findNeighbor(grid, x, y + 1);
    }
    if (x <= grid[0].length - 2) {
        sum += findNeighbor(grid, x + 1, y);
    }
    if (x >= 1) {
        sum += findNeighbor(grid, x - 1, y);
    }
    if (y >= 1) {
        sum += findNeighbor(grid, x, y - 1);
    }

    return sum;
}
