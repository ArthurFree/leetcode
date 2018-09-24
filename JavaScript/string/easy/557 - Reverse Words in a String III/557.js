/**
 * Time: 2018-9-24
 */

/**
 * 反转字符串中的单词 III
 * 执行时间： 140ms
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let arr = s.split(' ');
    for (var i = 0; i < arr.length; i++) {
        var temp = arr[i].split('');
        temp.reverse();
        arr[i] = temp.join('');
    }

    return arr.join(' ');
};

/**
 * 反转字符串中的单词 III - 第二种解法
 * 执行时间： 76ms
 * @param {string} s
 * @return {string}
 */
var reverseWords2 = function(s) {
    let ss = ' ';
    for (let i = s.length - 1; i >= 0; i--) {
        ss += s[i];
    }

    return ss.split(' ').reverse().join(' ');
};

/**
 * 反转字符串中的单词 III - 第三种解法
 * 执行时间： 72ms
 * @param {string} s
 * @return {string}
 */
var reverseWords3 = function(s) {
    let somes = s.split(' ');
    let news = '';
    for (let i = 0; i < somes.length; i++) {
        let tmps = '';
        for (let j = somes.length - 1;j >= 0; j--) {
            tmps += somes[i][j];
        }
        news += (tmps + ' ');
    }
    return news.substring(0, news.length - 1);
};
