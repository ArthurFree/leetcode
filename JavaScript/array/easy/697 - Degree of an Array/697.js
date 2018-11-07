/**
 * Time: 2018-11-7
 */

/**
 * 数组的度 - 第一种解法
 * 执行时间：112ms
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function(nums) {
    var map = {};
    var maxLen = 0;
    var minLen = null;
    var maxItems = [];
    // debugger
    for (var i = 0; i < nums.length; i++) {
        var item = nums[i];
        if (map[item]) {
            map[item].push(i);
        } else {
            map[item] = [i];
        }

        if (map[item].length > maxLen) maxLen = map[item].length;
    }

    console.log(map);

    for (var key in map) {
        var mapItem = map[key];
        console.log(mapItem);
        if (mapItem.length === maxLen) {
            if (minLen === null) {
                minLen = mapItem[mapItem.length - 1] - mapItem[0] + 1;
            } else if (mapItem[mapItem.length - 1] - mapItem[0] + 1 < minLen) {
                minLen = mapItem[mapItem.length - 1] - mapItem[0] + 1;
            }
        }
    }

    return minLen;
};

/**
 * 数组的度 - 第二种解法
 * 执行时间：96ms
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function(nums) {
    let start = {},
        end = {},
        count = {},
        max = 1;
    for (let i=0;i<nums.length;i++){
        if (nums[i] in count){
            max = Math.max(++count[nums[i]], max);
        }
        else {
            count[nums[i]] = 1;
            start[nums[i]] = i;
        }
        end[nums[i]] = i;
    }
    let res = nums.length;
    for (let x in count){
        if (count[x]===max){
            res = Math.min(end[x]-start[x]+1, res);
        }
    }
    return res;
};
