/**
 * Time: 2018-10-30
 */

/**
 * 最大连续1的个数 - 第一种解法
 * 执行时间：88ms
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    var max = 0;
    var count = 0;
    for (var i = 0; i <= nums.length; i++) {
        if (nums[i] === 1) {
            count++;
            continue;
        } else if (count > max) {
            max = count;
        }
        count = 0;
    }

    return max;
};

/**
 * 最大连续1的个数 - 第二种解法
 * 执行时间：68ms
 * @param {number[]} nums
 * @return {number}
 */
let findMaxConsecutiveOnes = function(nums) {
    let max = 0;
    let count = 0;
    for (let i = 0; i < nums.length; ++i) {
        if (nums[i] !== 1 && count !== 0 ) {
            // or max = cur > max ? cur : max;
            max = Math.max(max, count);
            count = 0;
        } else if (nums[i] === 1) {
            ++count;
        }
    }
    return Math.max(max, count);
};
