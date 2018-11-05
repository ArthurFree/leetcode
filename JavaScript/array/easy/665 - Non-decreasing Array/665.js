/**
 * Time: 2018-11-5
 */

/**
 * 非递减数列 - 第一种解法
 * 执行时间：ms
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function(nums) {
    var count = 0;
    for ( var i = 0; i < nums.length; i++) {
        if (nums[i - 1] > nums[i]) {
            count++;
            if (i - 2 < 0 || nums[i - 2] <= nums[i]) {
                nums[i - 1] = nums[i];
            } else {
                nums[i] = nums[i - 1];
            }
        }
    }

    return count <= 1;
};

/**
 * 非递减数列 - 第二种解法
 * 执行时间：68ms
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function(nums) {
    if (nums.length <= 2) {
       return true;
   }
   let hasNum = null;
   for (let i = 0; i < nums.length; i++) {
       if (nums[i] > nums[i + 1]) {
           if (hasNum != null) {
               return false;
           }
           hasNum = i;
       }
   }
   let flag = false;
   tmpNum = nums[hasNum + 1];
   if (nums[hasNum - 1] == null || nums[hasNum - 1] <= tmpNum) {
       if (nums[hasNum + 2] == null || tmpNum <= nums[hasNum + 2]) {
           flag = true;
       }
   }
   tmpNum = nums[hasNum];
   if (nums[hasNum + 2] == null || tmpNum <= nums[hasNum + 2]) {
       if (nums[hasNum - 1] == null || nums[hasNum - 1] <= tmpNum) {
           flag = true;
       }
   }
   return flag;
};
