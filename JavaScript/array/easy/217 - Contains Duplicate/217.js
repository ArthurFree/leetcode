/**
 * Time: 2018-10-25
 */

/**
 * 存在重复元素 - 第一种解法
 * 执行时间：3728ms
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    for (var i = 0; i < nums.length; i++) {
        if (nums.indexOf(nums[i]) !== nums.lastIndexOf(nums[i])) {
            return true;
        }
    }

    return false;
};

/**
 * 存在重复元素 - 第二种解法
 * 执行时间：72ms
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let map = {};
    for (let i = 0; i < nums.length; i++) {
        if (map[nums[i]] === undefined) {
            map[nums[i]] = true;
        } else {
            return true;
        }
    }

    return false;
}

/**
 * 存在重复元素 - 第三种解法
 * 执行时间：84ms
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    var set = new Set(nums);
    return set.size < nums.length;
};
