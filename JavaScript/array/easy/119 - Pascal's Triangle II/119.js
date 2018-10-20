/**
 * Time: 2018-10-20
 */

/**
 * 杨辉三角 II - 第一种解法
 * 执行时间： 76ms
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    let arr = [];
    for (let i = 1; i <= rowIndex + 1; i++) {
        if (i == 1) {
            arr = [1];
        } else if (i == 2) {
            arr = [1, 1];
        } else {
            let prev = arr[0];
            let cur = arr[1];
            for (let j = 1; j < i - 1; j++) {
                arr[j] = prev + cur;
                prev = cur;
                cur = arr[j + 1];
            }
            arr.push(1);
        }
    }
    return arr;
};

/**
 * 杨辉三角II - 第二种解法
 * 执行时间： 48ms
 * @param {number} rowIndex
 * @return {number[]}
 */
let getRow = function(rowIndex) {
    let res = new Array(rowIndex + 1).fill(1);
    for (let i = 2; i <= rowIndex; ++i) {
        for (let j = i - 1; j > 0; --j) {
            res[j] = res[j] + res[j - 1];
        }
    }
    return res;
};
