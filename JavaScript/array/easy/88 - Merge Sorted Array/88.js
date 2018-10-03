/**
 * Time: 2018-10-3
 */

/**
 * 合并两个有序数组
 * 执行时间： 72ms
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    nums1.splice(m, nums2.length);
    nums2.splice(n, nums2.length);

    for (var i = 0; i < nums2.length; i++) {
        if (nums1[nums1.length - 1] === undefined || nums2[i] >= nums1[nums1.length - 1]) {
            nums1.push(nums2[i]);
            continue;
        } else if (nums2[i] <= nums1[0]) {
            nums1.unshift(nums2[i]);
            continue;
        }
        for (var j = 0; j < nums1.length; j++) {
            if (nums2[i] >= nums1[j] && nums2[i] <= nums1[j + 1]) {
                nums1.splice(j + 1, 0, nums2[i]);
                break;
            }
        }
    }
}

/**
 * 合并两个有序数组 - 第二种解法
 * 执行时间： 52ms
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge2 = function (nums1, m, nums2, n) {
    let len = nums1.length - 1;
    let i = m - 1;
    let j = n - 1;

    while (j >= 0) {
        if (i < 0 || nums1[i] <= nums2[j]) {
            nums1[len] = nums2[j];
            nums2[j] = 0;
            --j;
            --len;
        } else if (nums1[i] > nums2[j]) {
            nums1[len] = nums1[i];
            nums1[i] = 0;
            --i;
            --j;
        }
    }
};

/**
 * 合并两个有序数组 - 第三种解法
 * 执行时间： 52ms
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge3 = function (nums1, m, nums2, n) {
    let i = m - 1,
        j = n - 1,
        k = m + n - 1;
    while (i >= 0 && j >= 0) {
        if (nums1[i] > nums2[j])
            nums1[k--] = nums1[i--];
        else
            nums1[k--] = nums2[j--];
    }
    while (j >= 0)
        nums1[k--] = nums2[j--];
};

/**
 * 合并两个有序数组 - 第四种解法
 * 执行时间： 52ms
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge4 = function(nums1, m, nums2, n) {
    let len = nums1.length;
    nums2.forEach((num2, i2) => {
        let index = nums1.findIndex(num1 => num1 > num2);
        index = index === -1 ? m + i2 : index;
        nums1.splice(index, 0, num2);
    });
    nums1.length = len;

};
