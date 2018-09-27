/**
 * Time: 2018-9-27
 */

/**
 * 转换成小写字母
 * 执行时间：68ms
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function(str) {
    var arr = str.split('');
    var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var lower = 'abcdefghijklmnopqrstuvwxyz';

    for (var i = 0; i < arr.length; i++) {
        var index = upper.indexOf(arr[i]);
        if (index > -1) {
            arr[i] = lower[index];
        }
    }

    return arr.join('');
};

/**
 * 转换成小写字母 - 第二种解法
 * 执行时间：52ms
 * @param {string} str
 * @return {string}
 */
var toLowerCase2 = function (str) {
    if (str.length === 0) return '';
    let newStr = '';
    for (let i = 0; i < str.length; i++) {
        let code = str[i].charCodeAt();
        // 判断是否 ASCII 码区间是否为大写字母区间
        if (code >= 65 && code <= 90) {
            code += 32;
            newStr += String.fromCharCode(code);
        } else {
            newStr += str[i];
        }
    }
    return newStr;
}

/**
 * 转换成小写字母 - 第三种解法
 * 执行时间：52ms
 * @param {string} str
 * @return {string}
 */
var toLowerCase3 = function (str) {
    let string = '';
    for (let i = 0; i < str.length; i++) {
        if (/[A-Z]/.test(str[i])) {
            let unicode = str.charCodeAt(i);
            let char = String.fromCharCode(unicode + 32);
            string += char;
        } else {
            string += str[i];
        }
    }
    return string;
}
