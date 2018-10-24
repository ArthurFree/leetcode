/**
 * Time: 2018-10-24
 */

/**
 * 旋转数组 - 第一种解法
 * 执行时间：160ms
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    for (var i = 0; i < k; i++) {
        var dd = nums.pop();
        nums.unshift(dd);
    }
};

/**
 * 旋转数组 - 第二种解法
 * 执行时间：64ms
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    let begin = 0;
    let current = 0;
    let next = 0;
    let temp1 = nums[current];
    let temp2 = 0;
    for (let i = 0; i < nums.length; i++) {
        next = (current + k) % nums.length;
        temp2 = nums[next];
        nums[next] = temp1;
        temp1 = temp2;
        current = next;
        if (next === begin) {
            current = (next + 1) % nums.length;
            next = (current + k) % nums.length;
            temp1 = nums[current];
            begin = current;
        }
    }
};

/**
 * 旋转数组 - 第三种解法
 * 执行时间：76ms
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    var len = nums.length;
    nums.unshift(...nums.splice(len - k % len, k));
}
