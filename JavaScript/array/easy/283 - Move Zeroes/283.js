/**
 * Time: 2018-10-27
 */

/**
 * 移动零 - 第一种解法
 * 执行时间：224ms
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    var i = 0;
    var count = 0;
    while(true) {
        if (i >= nums.length) break;
        if (nums[i] === 0) {
            nums.splice(i, 1);
            count++;
        } else {
            i++;
        }
    }
    while(count > 0) {
        nums.push(0);
        count--;
    }
};

/**
 * 移动零 - 第二种解法
 * 执行时间：60ms
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
let moveZeroes = function(nums) {
    let pos = 0;
    for (let i = 0; i < nums.length; ++i) {
        if (nums[i] !== 0) {
            nums[pos++] = nums[i];
        }
    }
    for (let i = pos; i < nums.length; ++i) {
        nums[i] = 0;
    }
};

/**
 * 移动零 - 第三种解法
 * 执行时间：72ms
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    var n=nums.length;
    for(var i=0;i<n;i++){
        if(nums[i]==0) {
            nums.splice(i, 1);
            nums.push(0);
            i--;
            n--;
        }
    }
};
