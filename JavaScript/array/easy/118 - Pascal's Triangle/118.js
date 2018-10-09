/**
 * Time: 2018-10-4
 */

/**
 * 杨辉三角
 * 执行时间：64ms
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    var result = [];
    for (var i = 1; i <= numRows; i++) {
        if (i === 1) {
            result.push([1]);
        } else if (i === 2) {
            result.push([1, 1]);
        } else {
            var preArr = result[result.length - 1];
            var arr = [];
            arr[0] = 1;
            for (var j = 0; j < i - 2; j++) {
                arr[j + 1] = preArr[j] + preArr[j + 1];
            }
            arr[i - 1] = 1;
            result.push(arr);
        }
    }
    return result;
};

/**
 * 杨辉三角 - 第二种解法
 * 执行时间：64ms
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    let arr = [];
    for (let i = 0; i < numRows; i++) {
        let length = i + 1;
        let subArr = new Array(length);
        subArr[0] = 1;
        subArr[length - 1] = 1;
        arr.push(subArr);
    }

    for (let index = 1; index < numRows; index++) {
        arr.forEach((subArr, i) => {
            if (i > index) {
                let last_arr = arr[i - 1];
                let last_1 = last_arr[index-1];
                let last_2 = last_arr[index];
                subArr[index] = last_1 + last_2;
            }
        })
    }
    return arr;
}
