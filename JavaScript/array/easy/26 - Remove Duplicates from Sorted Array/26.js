/**
 * Time: 2018-9-30
 */

/**
 * 删除排序数组中的重复项
 * 执行时间： 120ms
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    var obj = {};
    var len = nums.length;
    for (var i = 0; i < len; i++) {
        if (obj[nums[i]] === undefined) {
            obj[nums[i]] = true;
            nums.push(nums[i]);
        }
    }
    for (var j = 0; j < len; j++) {
        nums.shift();
    }
    return nums.length;
};

/**
 * 删除排序数组中的重复项 - 第二种解法
 * 执行时间： 68ms
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates2 = function (nums) {
    if (nums.length == 0 || nums.length === 1) return nums.length;
    var len = 0, num = nums[0];
    for (var i = 0; i < nums.length; i++) {
        // i, len 可从 1 开始
        if (i === 0) {
            len++;
            continue;
        }

        if (nums[i] === num) {
            continue;
        } else {
            if (i !== len) nums[len] = nums[i];
            len++;
            num = nums[i];
        }
    }

    return len;
}

/**
 * 删除排序数组中的重复项 - 第三种解法
 * 执行时间： 72ms
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates3 = function (nums) {
    let index = 0;
    for (let i = 0, len = nums.length; i < len; i++) {
        if (nums[i] !== nums[index]) {
            nums[++index] = nums[i];
        }
    }
    return ++index;
}

/**
 * 删除排序数组中的重复项 - 第四种解法
 * 执行时间： 88ms
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates4 = function (nums) {
    if (nums.length === 0) return 0;
    var i = 0;
    for (var j = 1; j < nums.length; j++) {
        if (nums[i] != nums[j]) {
            i++;
            nums[i] = nums[j];
        }
    }
    return i + 1;
}
