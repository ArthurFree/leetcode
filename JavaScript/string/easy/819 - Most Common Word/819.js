/**
 * Time: 2018-9-28
 */

/**
 * 最常见的单词
 * 执行时间：84ms
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
    var arr = paragraph.toLowerCase().split(/[^a-zA-Z]/g).filter((item => item !== ''));
    var map = {};
    var maxWord = '';
    var maxWordCount = 0;

    for (var i = 0; i < arr.length; i++) {
        var item = arr[i];

        if (banned.indexOf(item) > -1) continue;

        /**
         * 其他逻辑写法:
         * 1. map[item] = map[item] ? ++map[key] : 1;
         * 2. map[item] = (map[item] || 0) + 1
         */
        if (map[item] === undefined) {
            map[item] = 1;
        } else {
            map[item]++;
        }

        /**
         * 这里在一次循环中判断当前项是否出现次数最多的项
         * 另一种做法是，统计所有单词出现次数后，在遍历出出现次数最多的项
         */
        if (map[item] > maxWordCount) {
            maxWord = item;
            maxWordCount = map[item];
        }
    }

    return maxWord;
};

/**
 * 最常见的单词 - 第二种方法
 * 执行时间：56ms
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function (paragraph, banned) {
    paragraph = paragraph.replace(/[!|?|\'|,|;|.]/g, '').split(' ');
    var counts = {};
    for (var i = 0; i < paragraph.length; i++) {
        var w = paragraph[i].toLowerCase();
        if (!w || banned.indexOf(w) >= 0) {
            continue;
        }
        if (!counts[w]) {
            counts[w] = 0;
        }
        couts[w]++;
    }
    var ans = null;
    for (var k in counts) {
        if (!ans || counts[ans] < counts[k]) {
            ans = k;
        }
    }
    return ans;
}
