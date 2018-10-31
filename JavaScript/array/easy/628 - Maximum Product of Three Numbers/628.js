/**
 * Time: 2018-10-31
 */

/**
 * 三个数的最大乘积 - 第一种解法
 * 执行时间：176ms
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
    nums.sort((a, b) => b - a);
    var result = nums[0] * nums[1] * nums[2];
    if (result < 0) {
        return result;
    }

    var result1 = nums[0] * nums[nums.length - 1] * nums[nums.length - 2];

    // return result >= result1 ? result : result1;
    return Math.max(result, result1);
};

/**
 * 三个数的最大乘积 - 第二种解法
 * 执行时间：68ms
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
    let min1 = Number.MAX_VALUE;
    let min2 = Number.MAX_VALUE;
    let max1 = -Number.MAX_VALUE;
    let max2 = -Number.MAX_VALUE;
    let max3 = -Number.MAX_VALUE;
    for (let i = 0; i < nums.length; i++) {
        let n = nums[i];
        if (n < min1) {
            min2 = min1;
            min1 = n;
        } else if (n < min2) {
            min2 = n;
        }
        if (n > max3) {
            max1 = max2;
            max2 = max3;
            max3 = n;
        } else if (n > max2) {
            max1 = max2;
            max2 = n;
        } else if (n > max1) {
            max1 = n;
        }
    }
    return Math.max(min1 * min2 * max3, max1 * max2 * max3);
};

/**
 * 三个数的最大乘积 - 第三种解法
 * 执行时间：68ms
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function (nums) {
    nums.sort(function (a, b) {
        return a - b;
    });
    var a = nums[nums.length - 1] * nums[nums.length - 2] * nums[nums.length - 3];
    var b = nums[0] * nums[1] * nums[nums.length - 1];
    return Math.max(a, b);

};
