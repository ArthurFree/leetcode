/**
 * Time: 2018-10-30
 */

/**
 * 找到所有数组中消失的数字 - 第一种解法
 * 执行时间：456ms
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    if (!nums.length) return nums;
    const arr = [];
    const len = nums.length;
    nums = [...new Set(nums)].sort((a, b) => a - b);

    for (let i = 0; i < len; i++) {
        if (nums[i] == undefined || nums[i] !== i + 1) {
            arr.push(i + 1);
            nums.splice(i, 0, i + 1);
        }
    }

    return arr;
};

/**
 * 找到所有数组中消失的数字 - 第二种解法
 * 执行时间：124ms
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    var arr=[]
    var temp
    for (var i = 0; i < nums.length; i++) {
        if(nums[i]!=nums[nums[i]-1]) {
            temp = nums[nums[i]-1];
            nums[nums[i]-1]=nums[i];
            nums[i]=temp;
            i--;
        }
    }

    for (var i = 0; i < nums.length; i++) {
        if(nums[i]!=i+1) {
            arr.push(i+1);
        }
    }

    return (arr)
};

/**
 * 找到所有数组中消失的数字 - 第三种解法
 * 执行时间：132ms
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let result=[]
    for (let i=0;i<nums.length;i++){
        let index = Math.abs(nums[i])-1
            nums[index] = - Math.abs(nums[index])
    }
    for (let i=0;i<nums.length;i++) {
        if (nums[i]>0){
            result.push(i+1)
        }
    }
    return result
};
