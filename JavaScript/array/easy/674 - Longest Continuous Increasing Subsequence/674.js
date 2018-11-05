/**
 * Time: 2018-11-5
 */

/**
 * 最长连续递增序列 - 第一种解法
 * 执行时间：68ms
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
    if (nums.length === 0) return 0;
    var count = 1;
    var max = 0;
    for (var i = 1; i < nums.length; i++) {
        if (nums[i] <= nums[i - 1]) {
            max = Math.max(max, count);
            count = 1;
        } else {
            count++;
        }
    }

    return Math.max(max, count);
};

/**
 * 最长连续递增序列 - 第二种解法
 * 执行时间：76ms
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
    if(!nums.length) return 0
    let maxLength = 1
    let startIndex = 0
    for(let i = 1; i < nums.length; i++){
        if(nums[i] <= nums[i-1]){
            maxLength = Math.max(maxLength, i-startIndex)
            startIndex = i
        }
    }
    return Math.max(maxLength, nums.length-startIndex)
};
