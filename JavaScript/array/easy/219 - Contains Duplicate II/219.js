/**
 * Time: 2018-10-26
 */

/**
 * 存在重复元素 II - 第一种解法
 * 执行时间：1308ms
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    if(nums.length<2){return false;}
    for(var i=0;i<nums.length;i++){
       for(var j=i+1;j<=i+k&&j<nums.length;j++){
           if(nums[i]==nums[j]){return true;}
       }
    }
    return false;
}

/**
 * 存在重复元素 II - 第二种解法
 * 执行时间：64ms
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
let containsNearbyDuplicate = function(nums, k) {
    let map = new Map();
    for (let i = 0; i < nums.length; ++i) {
        let pos = map.get(nums[i]);
        if (pos !== undefined && i - pos <= k) {
            return true;
        }
        map.set(nums[i], i);
    }

    return false;
};
