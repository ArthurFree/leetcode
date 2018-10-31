/**
 * Time: 2018-10-31
 */

/**
 * 种花问题 - 第一种解法
 * 执行时间：96ms
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    var count = 0;
    for (var i = 0; i < flowerbed.length; i++) {
        if (flowerbed[i] === 0 && flowerbed[i - 1] !== 1 && flowerbed[i + 1] !== 1) {
            count++;
            // flowerbed.splice(i, 1, 1);
            flowerbed[i] = 1;
        }
    }

    return count >= n;
};

/**
 * 种花问题 - 第二种解法
 * 执行时间：68ms
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
    for (let i = 0; i < flowerbed.length;) {
        if (flowerbed[i] == 1) {
            i += 2;
        } else {
            if (canPlaceThisIndex(flowerbed, i)) {
                flowerbed[i] = 1;
                --n;
            }
            i++;
        }
    }
    return n <= 0;
};

var canPlaceThisIndex = function (flowerbed, index) {
    if (flowerbed[index] == 1) {
        return false;
    }
    if (flowerbed[index - 1] == 1 || flowerbed[index + 1] == 1) {
        return false;
    }
    return true;
}
