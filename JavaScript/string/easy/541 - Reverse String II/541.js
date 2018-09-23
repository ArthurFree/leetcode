/**
 * Time: 2018-9-22
 */

/**
 * 反转字符串 II
 * 执行时间： 100ms
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    var arr = [];
    var group = Math.ceil(s.length / (2 * k));
    for (var i = 0; i < group; i++) {
        arr.push(s.slice(i * 2 * k, (i + 1) * 2 * k));
    }

    for (var j = 0; j < arr.length; j++) {
        var tempArr = arr[j].split('');
        var temp = '';
        if (tempArr.length >= k) {
            temp = tempArr.slice(0, k).reverse()
                .concat(tempArr.slice(k)).join('');
        } else {
            tempArr.reverse();
            temp = tempArr.join('');
        }
        arr[j] = temp;
    }

    return arr.join('');
};

/**
 * 反转字符串 II - 第二种解法
 * 执行时间： 100ms
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr2 = function (s, k) {
    let str = '';
    for (let i = 0; i < s.length; i++) {
        if (parseInt(i / k) % 2 == 0) {
            let start = i + k;
            start = start > s.length ? s.length : start;
            for (let j = start - 1; j >= i; j--) {
                str += s[j];
            }
        } else {
            str += s.substr(i, k);
        }
    }
    return str;
};

/**
 * 反转字符串 II - 第三种解法
 * 执行时间： 100ms
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr3 = function (s, k) {
    return s.replace(new RegExp('(.{' + k + '})', 'g'), '$1-')
            .split('-')
            .map((item, index) => {
                return index % 2 ? item : item.split('').reverse().join('')
            })
            .join('');
};
