/**
 * Time: 2018-10-2
 */

/**
 * 最大子序和
 * 执行时间： 324ms
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    var maxNum = nums[0];
    var sum = 0;

    for (var i = 0; i < nums.length; i++) {
        sum = nums[i];
        if (sum > maxNum) {
            maxNum = sum;
        }
        for (var j = i + 1; j < nums.length; j++) {
            sum += nums[j];
            if (sum > maxNum) {
                maxNum = sum;
            }
        }
    }

    return maxNum;
};


/**
 * 最大子序和 - 第二种解法
 * 执行时间： 60ms
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray2 = function (nums) {
    if (nums.length < 2) {
        return 0 | nums[0];
    }
    var max = nums[0];
    for (var i = nums.length - 1; i >= 0; i--) {
        var sum = nums[i] + nums[i + 1];
        if (sum > nums[i]) {
            nums[i] = sum;
        }
        if (nums[i] > max) {
            max = nums[i];
        }
    }
    return max;
}

/**
 * 最大子序和 - 第三种解法
 * 执行时间： 64ms
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray3 = function (nums) {
    let count = nums[0], maxCount = nums[0];
    for (let i = 1; i < nums.length; i++) {
        count = Math.max(count + nums[i], nums[i]);
        maxCount = Math.max(maxCount, count);
    }
    return maxCount;
}

/**
 * 最大子序和 - 第四种解法
 * 执行时间： 64ms
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray4 = function(nums) {
    // 这里 max 也可以写成 -Infinity
    var sum = 0, max = -Number.MAX_VALUE;
    for(var i = 0; i < nums.length; i++) {
      if(sum < 0) {
        sum = 0;
      }
      sum += nums[i];
      max = Math.max(sum,max);
    }
    return max;
};
