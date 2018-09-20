/**
 * Time: 2018-9-20
 */

/**
 * 字符串中的单词数
 * 执行时间： 68ms
 * @param {string} s
 * @return {number}
 */
/* var countSegments = function(s) {
    var arr = s.split(/[^a-zA-Z'-]/g);
    return arr.filter(function (item) {
        return item !== '';
    }).length;
}; */

var countSegments = function(s) {
    var count = 0;
    for (var i = 0; i < s.length; i++) {
        if (s[i] !== ' ' && (i === 0 || s[i - 1] === ' ')) count++;
    }
    return count;
};

/**
 * 字符串中的单词数 - 第二种解法
 * 执行时间： 60ms
 * @param {string} s
 * @return {number}
 */
var countSegments2 = function(s) {
    if (s.match(/\S+/g)) return s.match(/\S+/g).length;
    return 0;
};

/**
 * 字符串中的单词数 - 第三种解法
 * 执行时间： 68ms
 * @param {string} s
 * @return {number}
 */
var countSegments3 = function(s) {
    return s.split(' ').filter(function (arr) {return arr}).length;
};

/**
 * 字符串中的单词数 - 第四种解法
 * 执行时间： 68ms
 * @param {string} s
 * @return {number}
 */
var countSegments4 = function(s) {
    s = s.trim();
    s = s.replace(/\s+/g, ' ');
    if (!s) return 0;
    return s.split(' ').length;
};
