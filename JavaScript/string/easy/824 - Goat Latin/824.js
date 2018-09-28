/**
 * Time: 2018-9-28
 */

/**
 * 最常见的单词
 * 执行时间：68ms
 * @param {string} S
 * @return {string}
 */
var toGoatLatin = function(S) {
    var arr = S.split(' ');
    var vowel = 'aeiouAEIOU';
    for (var i = 0; i < arr.length; i++) {
        var item = arr[i];
        if (vowel.indexOf(item[0]) > -1) {
            arr[i] = item + 'ma' + 'a'.repeat(i + 1);
        } else {
            arr[i] = item.substring(1) + item[0] + 'ma' + 'a'.repeat(i + 1);
        }
    }

    return arr.join(' ');
};

/**
 * 最常见的单词 - 第二种解法
 * 执行时间：52ms
 * @param {string} S
 * @return {string}
 */
var toGoatLatin2= function (S) {
    var s = S.split(' ');
    var cur = 'ma';
    var vo = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    var ans = [];
    for (var i = 0; i < s.length; i++) {
        if (s[i]) {
            cur += 'a';
            if (vo.has(s[i][0])) {
                ans.push(s[i] + cur);
            } else {
                ans.push(s[i].substring(1) + s[i][0] + cur);
            }
        }
    }
    return ans.join(' ');
}

/**
 * 最常见的单词 - 第三种解法
 * 执行时间：52ms
 * @param {string} S
 * @return {string}
 */
var toGoatLatin3 = function (S) {
    let s2arr = S.split(' ');
    const vowel = {
        a: 'a',
        e: 'e',
        i: 'i',
        o: 'o',
        u: 'u',
        A: 'A',
        E: 'E',
        I: 'I',
        O: 'O',
        U: 'U',
    };
    for (let i in s2arr) {
        if (s2arr[i][0] in vowel) {
            s2arr[i] += 'ma';
        } else {
            s2arr[i] = s2arr[i].slice(1) + s2arr[i][0] + 'ma';
        }
        s2arr[i] += 'a'.repeat(++i);
    }
    return s2arr.join(' ');
}
