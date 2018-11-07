/**
 * Time: 2018-11-7
 */

/**
 * 寻找数组的中心索引 - 第一种解法
 * 执行时间：2316ms
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    var left, right;
    var sum = function(arr) {
        // var result = arr.reduce(function(accumulator, currentValue) {
        //     return accumulator + currentValue;
        // });
        var result = arr[0];

        for (var i = 1; i < arr.length; i++) {
            result += arr[i];
        }

        return result;
    }

    for (var i = 0; i < nums.length; i++) {
        left = i === 0 ? [0] : nums.slice(0, i);
        right = i === nums.length - 1 ? [0] : nums.slice(i + 1);
        if (sum(left) === sum(right)) {
            return i;
        }
    }

    return -1;
};

/**
 * 寻找数组的中心索引 - 第二种解法
 * 执行时间：72ms
 * @param {number[]} nums
 * @return {number}
 */
let pivotIndex = function(nums) {
    if (nums.length === 0) return -1;
    let left = 0
    let right = 0;
    for (let i = 1; i < nums.length; ++i) {
        right += nums[i];
    }
    if (left === right) {
        return 0;
    }
    for (let i = 1; i < nums.length; ++i) {
        left += nums[i - 1];
        right -= nums[i];
        if (left === right) {
            return i;
        }
    }
    return -1;
};
