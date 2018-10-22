/**
 * Time: 2018-10-22
 */

/**
 * 买卖股票的最佳时机 - 第一种解法
 * 执行时间： 520ms
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    var max = 0;
    for (var i = 0; i < prices.length; i++) {
        for (var j = i + 1; j < prices.length; j++) {
            if (prices[j] > prices[i] && prices[j] - prices[i] > max) {
                max = prices[j] - prices[i];
            }
        }
    }

    return max;
};

/**
 * 买卖股票的最佳时机 - 第二种解法
 * 执行时间： 60ms
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let max = 0;
    let min = Number.MAX_VALUE;

    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < min) {
            min = prices[i];
        } else if (prices[i] - min > max) {
            max = prices[i] - min;
        }
    }

    return max;
};

/**
 * 买卖股票的最佳时机 - 第三种解法
 * 执行时间：64ms
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let res = 0, buy = prices[0];

    for (let e of prices) {
        buy = Math.min(e, buy);
        res = Math.max(res, e - buy);
    }

    return res;
};
