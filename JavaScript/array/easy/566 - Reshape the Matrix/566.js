/**
 * Time: 2018-10-31
 */

/**
 * 重塑矩阵 - 第一种解法
 * 执行时间：108ms
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(nums, r, c) {
    if (nums[0].length * nums.length !== r * c) return nums;
    var arr = [].concat.apply([], nums);
    var result = [];

    for (var i = 0; i < arr.length; i+=c) {
        if (i % c === 0) result.push(arr.slice(i, i + c));
    }

    return result;
};

/**
 * 重塑矩阵 - 第二种解法
 * 执行时间：104ms
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(nums, r, c) {
    if (nums.length * nums[0].length !== r * c) {
        return nums;
    }

    const res = [];
    let newRow = [];

    nums.forEach(arr => {
        arr.forEach(num => {
            newRow.push(num);
            if (newRow.length === c) {
                res.push(newRow);
                newRow = [];
            }
        });
    });

    return res;
};
