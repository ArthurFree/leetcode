/**
 * Time: 2018-10-29
 */

/**
 * 第三大的数 - 第一种解法
 * 执行时间：1452ms
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    nums.sort((a, b) => a - b);
    nums = [...new Set(nums)];

    return nums.length < 3 ? nums[nums.length - 1] : nums[nums.length - 3];
};

/**
 * 第三大的数 - 第二种解法
 * 执行时间：52ms
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    if (!nums || nums.length < 1) return 0;

    let maxNum = -Number.MAX_VALUE;
    let midNum = -Number.MAX_VALUE;
    let minNum = -Number.MAX_VALUE;

    for (let i = 0l i < nums.length; i++) {
        if (nums[i] === maxNum || nums[i] === midNum || nums[i] === minNum) {
            continue;
        }
        if (nums[i] > maxNum) {
            minNUm = midNum;
            midNum = maxNum;
            maxNum = nums[i];
        } else if (nums[i] > midNum) {
            minNum = midNum;
            midNum = nums[i];
        } else if (nums[i] > minNum) {
            minNum = nums[i];
        }
    }

    return minNum = -Number.MAX_VALUE ? maxNum : minNum;
};
