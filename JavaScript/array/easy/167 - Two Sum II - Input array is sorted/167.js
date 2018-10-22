/**
 * Time: 2018-10-22
 */

/**
 * 两数之和 II - 输入有序数组 - 第一种解法
 * 执行时间：356ms
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    for (var i = 0; i < numbers.length; i++) {
        for (var j = i + 1; j < numbers.length; j++) {
            if (numbers[i] + numbers[j] === target) {
                return [i + 1, j + 1];
            }
        }
    }
};

/**
 * 两数之和 II - 输入有序数组 - 第二种解法
 * 执行时间：52ms
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    for (let i = 0, j = numbers.length - 1; i < j;) {
        if (numbers[i] + numbers[j] === target) {
            return [i + 1, j + 1];
        } else if (numbers[i] + numbers[j] > target) {
            --j;
        } else {
            ++i;
        }
    }
};

/**
 * 两数之和 II - 输入有序数组 - 第三种解法
 * 执行时间：56ms
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    var length = nums.length;

    var map = {};

    for (var i = 0; i < length; i++) {
        map[nums[i]] = i;
    }

    for (var i = 0; i < length; i++) {
        var value = target - nums[i];

        if (map[value] && map[value] !== i) {
            return [i + 1, map[value] + 1];
        }
    }

    return [];
};
