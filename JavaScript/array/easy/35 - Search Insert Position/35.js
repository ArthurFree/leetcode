/**
 * Time: 2018-10-1
 */

/**
 * 搜索插入位置
 * 执行时间： 68ms
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    if (nums.indexOf(target) > -1) return nums.indexOf(target);
    if (target < nums[0]) return 0;
    if (target > nums[nums.length - 1]) return nums.length;

    for (var i = 1; i < nums.length; i++) {
        if (target > nums[i - 1] && target < nums[i]) {
            return i;
        }
    }
}

/**
 * 搜索插入位置 - 第二种解法
 * 执行时间： 48ms
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert2 = function (nums, target) {
    let startIndex = 0;
    let endIndex = nums.length - 1;
    let middleIndex = 0 | ((startIndex + endIndex) / 2);
    let returnIndex = -1;
    while (returnIndex == -1) {
        if (nums[startIndex] >= target) {
            returnIndex = 0;
            break;
        }
        if (nums[endIndex] < target) {
            returnIndex = endIndex + 1;
            break;
        }
        if (nums[endIndex] === target) {
            returnIndex = endIndex;
            break;
        }
        if (nums[middleIndex] === target) {
            returnIndex = middleIndex;
        }
        if (nums[middleIndex] > target) {
            endIndex = middleIndex;
        } else {
            startIndex = middleIndex;
        }
        middleIndex = 0 | ((startIndex + endIndex) / 2);
        if (middleIndex == startIndex) {
            returnIndex = endIndex;
        }
    }

    return returnIndex;
}

/**
 * 搜索插入位置 - 第三种解法
 * 执行时间： 52ms
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert3 = function(nums, target) {
    var low=0,high=nums.length-1;
    while(low<high-1){
        var mid = parseInt((low+high)/2);
        if(target == nums[mid]) return mid;
        else if(target < nums[mid]) high= mid;
        else low = mid;
    }

    if(nums[low] >=target) return low;
    else if(target<=nums[high]) return high;
    else return high+1;
};

/**
 * 搜索插入位置 - 第四种解法
 * 执行时间： 56ms
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert4 = function(nums, target) {
    for(var i = 0; i < nums.length; i++){
        if (nums[i] == target){
            return i
        }else if(nums[i] > target){
            if (i >= 1 && nums[i-1] < target){
                return i
            }else{
                return 0
            }
        }
    }
    return nums.length
};
