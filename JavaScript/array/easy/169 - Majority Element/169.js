/**
 * Time: 2018-10-23
 */

/**
 * 求众数 - 第一种解法
 * 执行时间：96ms
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    var len = nums.length;
    var halfLen = len / 2;
    var item;
    var cache = {};
    for (var i = 0; i < len; i++) {
        item = nums[i];
        if (cache[item] === undefined) {
            cache[item] = 1;
        } else {
            cache[item]++;
        }
        if (cache[item] > halfLen) {
            return item;
        }
    }
};

/**
 * 求众数 - 第二种解法
 * 执行时间：60ms
 * @param {number[]} nums
 * @return {number}
 */
let majorityElement = function(nums) {
    let count = 0;
    let candidate = 0;
    for (let num of nums) {
        if (count === 0) {
            candidate = num;
        }
        count = candidate === num ? count + 1 : count - 1;
    }
    return candidate;
};
