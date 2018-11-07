/**
 * Time: 2018-11-7
 */

/**
 * 使用最小花费爬楼 - 第一种解法
 * 执行时间：84ms
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
    var cost_i_1 = 0, cost_i_2 = 0;

    var n = cost.length;
    var total_cost = 0;

    if (n == 1 || n == 0) {
        return 0;
    }

    for (var i = 2; i <= n; i++) {
        total_cost = Math.min(cost[i - 1] + cost_i_1, cost[i - 2] + cost_i_2);
        cost_i_2 = cost_i_1;
        cost_i_1 = total_cost;
    }
    return total_cost;
};

/**
 * 使用最小花费爬楼 - 第二种解法
 * 执行时间：72ms
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    var len = cost.length;
    var dip = new Array(len+1);
    dip[0] = 0;
    dip[1] = 0;
    for(var i = 2; i < len + 1; i++){
        dip[i] = Math.min((dip[i - 2] + cost[i - 2]), (dip[i - 1] + cost[i - 1]))
    }
    return dip[len];
};

/**
 * 使用最小花费爬楼 - 第三种解法
 * 执行时间：76ms
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
    const dpTopDownMinCost = (len) => {
        let dp = {}
        const topDownHelper = (theLen) => {
            if (theLen in dp) return dp[theLen]
            if (theLen - 2 >= 0) {
                let theCost = theLen < cost.length ? cost[theLen] : 0
                dp[theLen] = theCost + Math.min(topDownHelper(theLen - 1), topDownHelper(theLen - 2))
                return dp[theLen]
            }
            return cost[theLen]
        }
        return topDownHelper(len)
    }
    return dpTopDownMinCost(cost.length)
};

/**
 * 使用最小花费爬楼 - 第三种解法
 * 执行时间：80ms
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    let length = cost.length
    let f1 = cost[1], f2 = cost[0]
    for(let i = 2; i < length; i++){
        let f0 = Math.min(f2, f1) + cost[i];
        f2 = f1;
        f1 = f0;
    }
    return Math.min(f1,f2);
};
