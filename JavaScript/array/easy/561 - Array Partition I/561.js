/**
 * Time: 2018-10-30
 */

/**
 * 数组拆分 I - 第一种解法
 * 执行时间：152ms
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    nums.sort((a, b) => a - b);
    let sum = 0;
    let len = nums.length;

    for (let i = 0; i < len; i+=2) {
        sum += nums[i];
    }

    return sum;
};
