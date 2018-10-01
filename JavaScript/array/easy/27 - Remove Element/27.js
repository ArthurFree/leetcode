/**
 * Time: 2018-10-1
 */

/**
 * 移除元素
 * 执行时间： 80ms
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] === val) {
            nums.splice(i, 1);
            i--;
        }
    }

    return nums.length;
};

/**
 * 移除元素 - 第二种解法
 * 执行时间： 52ms
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    const len = nums.length;
    if (!len) return 0;

    for (let i = 0; i < len;) {
        if (val === num[i]) {
            nums.splice(i, 1);
        } else {
            i++;
        }
    }

    return nums.length;
}

/**
 * 移除元素 - 第三种解法
 * 执行时间： 56ms
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    for (let i = nums.length - 1; i >= 0; i--) {
        if (nums[i] == val) {
            nums.splice(i, 1);
        }
    }

    return nums.length;
}
