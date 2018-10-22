/**
 * Time: 2018-10-22
 */

/**
 * 买卖股票的最佳时机 II - 第一种解法
 * 执行时间： 408ms
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    var len = prices.length;
    var max = 0;

    if (len < 2) return max;

    var min = prices[0];
    for (var i = 0; i < len; i++) {
        var item = prices[i];
        var prev = prices[i - 1];
        if (item >= prev) {
            max = max + (item - prev);
        } else {
            min = item;
        }
    }
    return max;
};

/**
 * 买卖股票的最佳时机 II - 第二种解法
 * 执行时间： 56ms
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let max = 0;
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] - prices[i - 1] > 0) {
            max += prices[i] - prices[i - 1];
        }
    }

    return max;
};
