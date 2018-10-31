/**
 * Time: 2018-10-31
 */

/**
 * 最短无序连续子数组 - 第一种解法
 * 执行时间：136ms
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
    let arr = nums.slice();
    let count = 0;
    let num = 0;
    arr.sort((a, b) => a - b);

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== arr[i] && count === 0) {
            count++;
        } else if (nums[i] == arr[i]) {
            if (count !== 0) count++;
            num++;
        } else if (nums[i] !== arr[i]) {
            count++;
            num = 0;
        }
    }

    return num !== 0 && count !== 0 ? count - num : count;
};

//测试用例　　1.[]  2.[1,2,3,4]  3.[4,3,2,1]  4.[1,3,2,4]   5.[2,6,4,8,10,9,15]  6.[1,2,3,3,3]  7.[2,1]

//1.将数组排序赋给一个新的数组，通过两个数组之间的比较，第一个和最后一个元素不同的位置索引即为子数组的界限
// var findUnsortedSubarray = function(nums) {
//     if(!nums || !nums.length){
//         return 0;
//     }
//     let len=nums.length;
//     let temp=[];
//     for(let i=0;i<len;i++){
//         temp[i]=nums[i];
//     }
//     temp.sort((a,b)=>{
//         return a-b;
//     });
//     let left=0;
//     let right=len-1;
//     for(let i=0;i<len;i++){
//         if(temp[i] !=nums[i]){
//             left=i;
//             break;
//         }
//     }
//     for(let i=len-1;i>=0;i--){
//         if(temp[i]!=nums[i]){
//             right=i;
//             break;
//         }
//     }
//     return right > left ? right-left+1 : 0;
// };
//O(n^2)  O(n)

//2.按照我们自己寻找最小子数组的思路来解决。
//首先分别设置左、右指针来指示子数组的首和尾，并设置最大值和最小值，（最小值赋大值，最大值赋小值）
//期间若左指针l最后等于数组最大索引，则证明数组全部元素均按升序排序；
//在找到的界限内寻找内部的最小值和最大值；
//左指针向左走，右指针向右走，直到小于界限内最小值后的位置，及大于界限内最大值前的位置。
//注意处理好最后返回值。
// var findUnsortedSubarray = function(nums) {
//     if(!nums || !nums.length){
//         return 0;
//     }
//     let len=nums.length;
//     let left=0;
//     let right=len-1;
//     while(left < right && nums[left] <= nums[left+1]){
//         left++;
//     }
//     if(left==right){
//         return 0;
//     }
//     while(nums[right] >= nums[right-1]){
//         right--;
//     }
//     let min=nums[left];
//     let max=nums[right];
//     for(let i=left;i<=right;i++){
//         min=nums[i] < min ? nums[i] : min;
//         max=nums[i] > max ? nums[i] : max;
//     }
//     while(left >= 0 && nums[left] > min){
//         left--;
//     }
//     while(right <= len-1 && nums[right] < max){
//         right++;
//     }
//     return right-left-1;
// };
//O(n)  O(1)

/**
 * 最短无序连续子数组 - 第二种解法
 * 执行时间：84ms
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
    if(!nums || !nums.length){
        return 0;
    }
    let len=nums.length;
    let i=0;
    let j=-1;
    let max=nums[0];
    let min=nums[len-1];
    for(let left=0,right=len-1;right>=0;left++,right--){
        max=nums[left] > max ? nums[left] : max;
        if(nums[left] != max){
            j=left;
        }
        min=nums[right] < min ? nums[right] : min;
        if(nums[right] != min){
            i=right;
        }
    }
    return j-i+1;
};
