/**
 * Time: 2018-11-7
 */

/**
 * 至少是其他数字两倍的最大数 - 第一种解法
 * 执行时间：84ms
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
    var maxn = Number.MIN_SAFE_INTEGER, idx = -1, sec = Number.MIN_SAFE_INTEGER;
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] > maxn) {
            sec = maxn;
            maxn = nums[i];
            idx = i;
        } else if(nums[i] > sec){
            sec = nums[i];
        }
    }
    return sec * 2 > maxn ? -1 : idx;
};

/**
 * 至少是其他数字两倍的最大数 - 第二种解法
 * 执行时间：56ms
 * @param {number[]} nums
 * @return {number}
 */
let dominantIndex = function(nums) {
    if (nums.length === 1) return 0;
    let max = 0;
    let secondMax = -1;
    for (let i = 1; i < nums.length; ++i) {
        if (nums[i] >= nums[max]) {
            secondMax = max;
            max = i;
        } else if (secondMax === -1 || nums[i] > nums[secondMax]) {
            secondMax = i;
        }
    }
    return nums[max] >= nums[secondMax] * 2 ? max : -1;
};

/**
 * 至少是其他数字两倍的最大数 - 第三种解法
 * 执行时间：64ms
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
    if (nums.length === 1) return 0
    let temp = [...nums]
    temp.sort((a, b) => b - a)
    if (temp[0] >= temp[1] * 2) return nums.indexOf(temp[0])
    return -1
};
