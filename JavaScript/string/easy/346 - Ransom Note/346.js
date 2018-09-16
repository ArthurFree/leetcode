/**
 * Time: 2018-9-16
 */

/**
 * 赎金信
 * 执行时间： 96ms
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    var ransomObi = {};
    var magazineArr = magazine.split('');

    for (var i = 0; i < ransomNote.length; i++) {
        var index = magazineArr.indexOf(ransomNote[i]);
        if (index === -1) return false;
        magazineArr.splice(index, 1);
    }

    return true;
};

/**
 * 赎金信 - 第二种解法
 * 执行时间： 64ms
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct2 = function(ransomNote, magazine) {
    let code = new Array(26).fill(0);
    for (let i = 0; i < magazine.length; i++) {
        code[magazine[i].charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }
    for (let i = 0; i < ransomNote.length; i++) {
        let index = ransomNote[i].charCodeAt(0) - 'a'.charCodeAt(0);
        code[index]--;
        if (code[index] < 0) {
            return false;
        }
    }

    return true;
};


/**
 * 赎金信 - 第三种解法
 * 执行时间： 80ms
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct3 = function(ransomNote, magazine) {
    for (let i = 0; i < magazine.length; i++) {
        ransomNote = ransomNote.replace(magazine[i], '');
    }

    return ransomNote.length === 0;
};
