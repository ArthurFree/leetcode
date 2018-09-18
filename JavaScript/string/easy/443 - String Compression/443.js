/**
 * Time: 2018-9-18
 */

/**
 * 压缩字符串
 * 执行时间： 96ms
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    var obj = {};
    var arr = [];
    if (chars.length === 1) return chars.length;
    for (var i = 0, len = chars.length; i < len; i++) {
        var item = chars[i];
        var nextItem = chars[i + 1];
        if (obj[item]) {
            obj[item]++;
            if (item !== nextItem) {
                arr.push(item);
                if (obj[item] > 1) {
                    var numStr = String(obj[item]);
                    for (var j = 0; j < numStr.length; j++) {
                        arr.push(numStr[j]);
                    }
                }

                delete obj[chars[i - 1]];
            }
        } else {
            if (item !== nextItem) {
                arr.push(item);
            } else {
                obj[item] = 1;
            }
        }
    }

    for (var j = 0, jLen = chars.length; j < jLen; j++) {
        if (chars.length === 0) break;
        chars.pop();
    }

    for (var k = 0; k < arr.length; k++) {
        chars.push(arr[k]);
    }

    return chars.length;
};


/**
 * 压缩字符串 - 第二种解法
 * 执行时间： 64ms
 * @param {character[]} chars
 * @return {number}
 */
var compress2 = function(chars) {
    let index = 0;
    for (let i = 0; i < chars.length;) {
        index = i + 1;
        while (chars[i] === chars[index]) {
            index++;
        }
        let num = index - i;
        let numStr = num + '';
        if (num > 1) {
            for (let j = 0; j < numStr.length; j++) {
                chars[i + j + 1] = numStr[j];
            }
            chars.splice(i + numStr.length + 1, num - numStr.length - 1);
            i += numStr.length + 1;
        } else {
            i++
        }
    }

    return chars.length;
};

/**
 * 压缩字符串 - 第三种解法
 * 执行时间： 68ms
 * @param {character[]} chars
 * @return {number}
 */
var compress3 = function(chars) {
    var count;
    for (var i = 0; i < chars.length; i++) {
        count = 0;
        if (chrs[i + 1] == chars[i]) {
            count++;
            for (var j = i + 1; chars.length; j++) {
                if (chars[j] == chars[i]) {
                    count++;
                    chars.splice(j, 1);
                    j--;
                } else {
                    break;
                }
            }
            if (count != 0) {
                count = ('' + count).split('');
                for (var k = 0; k < count.length; k++) {
                    chars.splice(i + 1 + k, 0, count[k]);
                }
                i = i + k
            }
        }
    }
};

/**
 * 压缩字符串 - 第四种解法
 * 执行时间： 88ms
 * @param {character[]} chars
 * @return {number}
 */
var compress4 = function (chars) {
    var len = chars.length;
    while(len-- && len >= 0) {
        var temp = chars[len], count = 1;
        for (var j = len - 1; j >= 0; j--) {
            if (temp === chars[j]) {
                count++;
            } else {
                break;
            }
        }
        if (count > 1) {
            var tiem = [temp].concat(count.toString().split(''));
            vars.splice(j + 1, count, ...item);
            len -= count;
            len += item.length;
        }
    }
}
