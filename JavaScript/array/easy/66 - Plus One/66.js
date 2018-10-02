/**
 * Time: 2018-10-2
 */

/**
 * 加一
 * 执行时间： 68ms
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    var len = digits.length;
    var count = 0;
    if (digits[len - 1] !== 9) {
        digits[len - 1] += 1;
    } else {
        digits[len - 1] = 0;
        count = 1;
        for (var i = len - 2; i >= 0; i--) {
            if (count === 0) break;
            if (digits[i] === 9 && count == 1) {
                count = 1;
                digits[i] = 0;
            } else {
                digits[i] += 1;
                count = 0;
            }
        }

        if (count === 1) {
            digits.unshift(1);
        }
    }

    return digits;
};

/**
 * 加一 - 第二种解法
 * 执行时间： 60ms
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne2 = function(digits) {
    let nextPlus = 1;
    let curDigit;
    for (let i = digits.length - 1; i >= 0; i--) {
        if (nextPlus == 0) {
            break;
        }
        curDigit = digits[i] + nextPlus;
        if (curDigit >= 10) {
            nextPlus = Math.round(curDigit / 10);
            curDigit = Math.round(curDigit % 10);
        } else {
            nextPlus = 0;
        }
        digits[i] = curDigit;
    }
    if (nextPlus != 0) {
        digits.unshift(nextPlus);
    }
    return digits;
};

/**
 * 加一 - 第三种解法
 * 执行时间： 60ms
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne3 = function(digits) {
    var add = 1;
    digits.unshift(0);
    for (var i = digits.length - 1; i >= 0; i--) {
        digits[i] += add;
        if (digits[i] < 10) {
            if (digits[0] == 0) {
                digits.shift();
            }
            return digits;
        }

        digits[i] = 0;
    }
};
