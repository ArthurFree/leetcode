/**
 * Time: 2018-10-27
 */

/**
 * 缺失数字 - 第一种解法
 * 执行时间：1756ms
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    nums.sort(function (a, b) { return a - b});

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== i) {
            return i;
        }
    }

    return nums.length;
};

/**
 * 缺失数字 - 第二种解法
 * 执行时间：60ms
 * @param {number[]} nums
 * @return {number}
 */
let missingNumber = function(nums) {
    let res = 0;
    for (let i = 0; i <= nums.length; i++) {
        res ^= i ^ nums[i];
    }
    return res;
}

/**
 * 缺失数字 - 第三种解法
 * 执行时间：60ms
 * @param {number[]} nums
 * @return {number}
 */
let missingNumber = function(nums) {
    let res = nums.length * (nums.length + 1) / 2;
    nums.forEach(num => res -= num);
    return res;
}

/**
 * 缺失数字 - 第四种解法
 * 执行时间：72ms
 * @param {number[]} nums
 * @return {number}
 */
var missNumber = function(nums) {
    const len = nums.length;
    const total = nums.reduce((total, n) => total + n, 0);
    const max = len * ((len + 1) / 2);
    return max - total;
}
