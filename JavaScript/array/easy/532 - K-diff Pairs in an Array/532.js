/**
 * Time: 2018-10-30
 */

/**
 * 数组中的 K-diff 数对 - 第一种解法
 * 执行时间：5016ms
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function(nums, k) {
    let count = 0, len = nums.length;
    nums.sort((a,b) => {return a - b;});  // 升序排序
    for(let i = 0; i < len; i++){
        let curr = nums[i] + k;
        if (i -1 >= 0 && nums[i] == nums[i - 1]) {  // 排除k-diff对（i,j）中i重复的情况
            continue;
        }
        for (let j = i + 1; j < len; j++) {
            if (nums[j + 1] == nums[j] && j + 1 < len) {  // 排除k-diff对（i,j）中j重复的情况
                continue;
            }
            if (nums[j] == curr) {
                count++;
            }
        }
    }
    return count;
};

/**
 * 数组中的 K-diff 数对 - 第二种解法
 * 执行时间：72ms
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function (nums, k) {
    if (nums === null || nums.length === 0 || k < 0) return 0
    let tempObj = {}
    nums.forEach(x => {
        if (tempObj[x]) {
            tempObj[x]++
        } else {
            tempObj[x] = 1
        }
    })
    let count = 0
    if (k === 0) {
        for (let f in tempObj) {
            if (tempObj[f] >= 2) count++
        }
    } else {
        for (let f in tempObj) {
            if (tempObj[Number(f) + k]) count++
        }
    }
    return count
};

/**
 * 数组中的 K-diff 数对 - 第二种解法
 * 执行时间：84ms
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function(nums, k) {
    if (k < 0) return 0;
    let set = new Set(), res = new Set();
    for(let i = 0; i < nums.length; i++) {
        if (set.has(nums[i]+k)) res.add(nums[i]+k);
        if (set.has(nums[i]-k)) res.add(nums[i]);
        set.add(nums[i]);
    }
    return res.size;
};

/**
 * 数组中的 K-diff 数对 - 第二种解法
 * 执行时间：88ms
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function(nums, k) {
    var res = 0;
    if (k<0){
        return 0;
    }
    if (k===0){
        let count = {};
        for (let i=0;i<nums.length;i++){
            if (nums[i] in count){
                count[nums[i]] ++;
            }
            else {
                count[nums[i]] = 1;
            }
        }
        for (let i in count){
            if (count[i]>1){
                res ++;
            }
        }
        return res;
    }
    var set = new Set(nums);
    for (let i of set){
        if (set.has(i+k)){
            res ++;
        }
    }
    return res;
};
