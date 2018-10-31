/**
 * Time: 2018-10-31
 */

/**
 * 子数组最大平均数 I - 第一种解法
 * 执行时间：96ms
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    // var max = -Number.MAX_VALUE;
    let max = 0;
    let sum = 0;
    for (let i = 0; i < k; i++) {
        max += nums[i];
    }
    sum = max;
    for (let i = 1; i < nums.length; i++) {
        if (i + k - 1 > nums.length - 1) break;
        sum = sum - nums[i - 1] + nums[i + k - 1];

        max = Math.max(sum, max);
    }

    return max / k;
};

/**
 * 子数组最大平均数 I - 第二种解法
 * 执行时间：96ms
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let currentMax=0;
    for(let i=0; i<k; i++){
        currentMax+= nums[i];
    }

    let maxSoFar= currentMax;

    for(let j=k; j<nums.length; j++){
        currentMax+=(nums[j]-nums[j-k]);
        maxSoFar= Math.max(maxSoFar, currentMax);
    }

    return maxSoFar/k;
};

/**
 * 子数组最大平均数 I - 第三种解法
 * 执行时间：96ms
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    if (nums.length < k) {
        return nums;
    }
    let maxAverage = -Number.MAX_VALUE;
    let tmpAverage = 0;
    for (let i = 0; i < nums.length; i++) {
        tmpAverage += nums[i];
        if (i >= k - 1) {
            tmpAverage -= (0 | nums[i - k]);
            if (tmpAverage > maxAverage) {
                maxAverage = tmpAverage;
            }
        }
    }
    return maxAverage / k;
};
