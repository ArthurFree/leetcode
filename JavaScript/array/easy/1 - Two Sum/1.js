/**
 * Time: 2018-9-30
 */

/**
 * 两数之和
 * 执行时间： 148ms
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for (var i = 0; i < nums.length; i++) {
        for (var j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
};

/**
 * 两数之和 - 第二种解法
 * 执行时间： 52ms
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum2 = function (nums, target) {
    var l = nums.length;
    var n = {};
    for (var i = 0; i < l; ++i) {
        if (n[target - nums[i]] !== undefined) {
            return [n[target - nums[i]], i];
        }
        n[nums[i]] = i;
    }
}

/**
 * 两数之和 - 第三种解法
 * 执行时间： 56ms
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum3 = function (nums, target) {
    var length = nums.length;
    var map = {};

    for (var i = 0; i < length; i++) {
        map[nums[i]] = i;
    }

    for (var i = 0; i < length; i++) {
        var value = target - nums[i];

        if (map[value] && map[value] !== i) {
            return [i, map[value]];
        }
    }

    return [];
}
