/**
 * Time: 2018-9-16
 */

/**
 * 反转字符串中的元音字母
 * 执行时间： 164ms
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    var vowelStr = 'aeiouAEIOU';
    var arr = s.split('');
    var len = arr.length;
    var temp = '';
    var i = 0, j = len - 1;
    while (i < j) {
        var isVowelI = vowelStr.indexOf(s[i]);
        var isVowelJ = vowelStr.indexOf(s[j]);
        if (isVowelI === -1) i++;
        if (isVowelJ === -1) j--;
        if (isVowelI > -1 && isVowelJ > -1) {
            temp = arr[i];
            arr[i] = arr[j]
            arr[j] = temp;
            i++;
            j--;
        }
    }

    return arr.join('');
};


/**
 * 反转字符串中的元音字母 - 第二种解法
 * 执行时间： 84ms
 * @param {string} s
 * @return {string}
 */
var reverseVowels2 = function(s) {
    var aeiou = s.replace(/[^aeiouAEIOU]/g, '');
    var len = aeiou.length;
    var index = 0;
    return s.replace(/[aeiouAEIOU]/g, function () {
        index++;
        return aeiou[len-index];
    });
};
