/**
 * Time: 2018-11-5
 */

/**
 * 图片平滑器 - 第一种解法
 * 执行时间：264ms
 * @param {number[][]} M
 * @return {number[][]}
 */
var imageSmoother = function(M) {
    var len = M.length;
    var itemLen = M[0].length;
    var resArr = M.map(function (item, index) {
        return [].concat(item);
    });
    var mapArr = [
        [0,-1], [-1,-1], [-1,0], [-1,1], [0,1], [1,1], [1,0], [1,-1]
    ];

    for (var i = 0; i < len; i++) {
        for (var j = 0; j < itemLen; j++) {
            var item = M[i][j], all = 1;
            for (var k = 0; k < mapArr.length; k++) {
                var x = i + mapArr[k][0], y = j + mapArr[k][1];
                if (x < 0 || x >= len || y < 0 || y >= itemLen) continue
                ++all;
                item += M[x][y];
            }
            resArr[i][j] = Math.floor(item / all);
        }
    }

    return resArr;
};

/**
 * 图片平滑器 - 第二种解法
 * 执行时间：160ms
 * @param {number[][]} M
 * @return {number[][]}
 */
var imageSmoother = function (M) {
    let MM = [];
    for (let i = 0; i < M.length; i++) {
        for (let j = 0; j < M[i].length; j++) {
            if (MM[i] == null) {
                MM[i] = [];
            }
            MM[i][j] = getPointAverage(i, j, M);
        }
    }
    return MM;
};

var getPointAverage = function (x, y, M) {
    let value = 0;
    let count = 0;
    let istart = -1;
    let iend = 1;
    let jstart = -1;
    let jend = 1;
    if (x == 0) {
        istart = 0;
    }
    if (y == 0) {
        jstart = 0;
    }
    if (x == M.length) {
        iend = 0;
    }
    if (y == M[0].length) {
        jend = 0;
    }
    for (let i = istart; i <= iend; i++) {
        for (let j = jstart; j <= jend; j++) {
            if (M[x + i] != null && M[x + i][y + j] != null) {
                count++;
                value += M[x + i][y + j];
            }
        }
    }
    return Math.floor(value / count);
}

/**
 * 图片平滑器 - 第三种解法
 * 执行时间：176ms
 * @param {number[][]} M
 * @return {number[][]}
 */
var imageSmoother = function(M) {
    let r = M.length;
    let c = M[0].length;
    let res = [];
    for(let i=0;i<r;i++){
        let temp = [];
        for(let j=0;j<c;j++){
            let sum = 0;
            let count = 0;
            for(let x=Math.max(0,i-1); x<=Math.min(r-1, i+1); x++)
            {
                for(let y=Math.max(0, j-1); y<=Math.min(c-1, j+1); y++)
                {
                     sum += M[x][y];
                     count++;
                 }
             }
            temp.push(parseInt(sum / count,10));
        }
        res.push(temp);
    }
    return res;
};


/*
[
    [2,3,4],
    [5,6,7],
    [8,9,10],
    [11,12,13],
    [14,15,16]
]
*/

/*

class Solution {
public:
    vector<vector<int>> imageSmoother(vector<vector<int>>& M) {
        if (M.empty() || M[0].empty()) return {};
        int m = M.size(), n = M[0].size();
        vector<vector<int>> res = M, dirs{{0,-1},{-1,-1},{-1,0},{-1,1},{0,1},{1,1},{1,0},{1,-1}};
        for (int i = 0; i < m; ++i) {
            for (int j = 0; j < n; ++j) {
                int cnt = M[i][j], all = 1;
                for (auto dir : dirs) {
                    int x = i + dir[0], y = j + dir[1];
                    if (x < 0 || x >= m || y < 0 || y >= n) continue;
                    ++all;
                    cnt += M[x][y];
                }
                res[i][j] = cnt / all;
            }
        }
        return res;
    }
};

*/
