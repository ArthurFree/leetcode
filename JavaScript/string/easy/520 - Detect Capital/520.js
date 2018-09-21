/**
 * Time: 2018-9-21
 */

/**
 * 检测大写字母
 * 执行时间： 72ms
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    var allUpper = word.toUpperCase();
    var allLower = word.toLowerCase();

    if (allUpper === word || allLower === word) return true;

    if (word[0] === allUpper[0] && allLower.indexOf(word.slice(1)) > -1) return true;

    return false;
};

/**
 * 检测大写字母 - 第二种解法
 * 执行时间：60ms
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse2 = function(word) {
    return /(^[A-Z]+$)|(^[a-z]+$)|(^[A-Z][a-z]+$)/g.test(word);
};

/**
 * 检测大写字母 - 第三种解法
 * 执行时间：80ms
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse3 = function(word) {
    var i=0,
        j=0,
        k=0,
        l=0;
    for (i = 1; i < word.length; i++) {
        if(word.charAt(i) >= 'A' && word.charAt(i) <= 'Z'){
            j++;
        }
    }
    for (k = 0; k < word.length; k++) {
        if(word.charAt(k) >= 'A' && word.charAt(k) <= 'Z') {
            l++;
        }
    }
    if (l == word.length || j == 0){
        return true;
    } else{
        return false;
    }
};
