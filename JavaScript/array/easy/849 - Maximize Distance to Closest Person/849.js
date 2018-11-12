/**
 * Time: 2018-11-12
 */

/**
 * 到最近的人的最大距离 - 第一种解法
 * 执行时间：116ms
 * @param {number[]} seats
 * @return {number}
 */
var maxDistToClosest = function(seats) {
    let len = seats.length;
    let count0 = 0;
    let arr0 = [];
    //获得所有的连续的0
    for (var i = 0; i < len; i++) {
        if (seats[i] == 0) {
            count0++;
        } else {
            arr0.push(count0);
            count0 = 0;
        }
    }
    //获取数组末尾一段连续的0数
    arr0.push(count0);
    //得到最大连续0数
    let max = Math.max(...arr0);
    let len0 = arr0.length;
    //处理首尾没人坐的情况
    if (seats[0] == 0 || seats[len - 1] == 0)
        return Math.max(arr0[0], Math.ceil(max / 2), arr0[len0 - 1]);
    return Math.ceil(max / 2);
};

/**
 * 到最近的人的最大距离 - 第二种解法
 * 执行时间：68ms
 * @param {number[]} seats
 * @return {number}
 */
var maxDistToClosest = function (seats) {
    var index = [];
    var len = seats.length;
    if (len == 2) return 1;
    for (let i = 0; i < len; i++) {
        if (seats[i] == 1) index.push(i);
    }
    var max = 0;
    len = index.length;
    for (let i = 0; i < len - 1; i++) {
        let avg = parseInt((index[i] + index[i + 1]) / 2);
        let min = Math.min(avg - index[i], index[i + 1] - avg);
        if (min > max) max = min;
    }
    if (seats[0] == 0 && max < index[0] - 0) max = index[0];
    if (seats[seats.length - 1] == 0 && max < seats.length - 1 - index[len - 1]) max = seats.length - 1 - index[len - 1];
    return max;
};

/**
 * 到最近的人的最大距离 - 第三种解法
 * 执行时间：88ms
 * @param {number[]} seats
 * @return {number}
 */
var maxDistToClosest = function (seats) {
    //  大致思路：求两个1之间的长度（连续0的最大长度）  (n+1)/2
    //  当0开头结尾的时候特殊判断  比如 1000是3而不是2；

    var max = 0;
    var index = -1;
    for (var i = 0; i < seats.length; i++) {
        if (seats[i] == 1) {
            if (index == -1) {
                max = i;
            }
            else
                max = Math.max(parseInt((i - index) / 2), max);     //  当0不在开头或结尾  直接求出结果；

            index = i;
        }
    }
    return Math.max(max, (seats.length - index - 1));
};
