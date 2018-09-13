/**
 * Time: 2018-9-13
 */

/**
 * 最长公共前缀
 * 执行时间： 76ms
 * @param {string[]} arr
 */
var longestCommonPrefix = function (arr) {
    if (arr.length === 0) return '';
    var firstArrItem = arr.shift();
    if (arr.length === 0) return firstArrItem;
    var currLongestPrefix = '';
    var middle = Math.ceil(firstArrItem.length / 2);

    function getPrefix(str, arr) {
        if (middle === 0) return;
        var leftPart = str.slice(0, middle);
        var hasPrefix = false;

        for (var i = 0, len = arr.length; i < len; i ++) {
            if (arr[i].indexOf(leftPart) !== 0) {
                hasPrefix = false;
                break;
            } else {
                hasPrefix = true;
            }
        }

        if (!hasPrefix) {
            if (currLongestPrefix) return;
            middle--;
            getPrefix(str, arr);
        } else {
            currLongestPrefix = leftPart;
            middle++;
            if (middle <= str.length) {
                // leftPart = str.slice(0, middle + 1);
                getPrefix(str, arr);
            }
        }
    }

    getPrefix(firstArrItem, arr);

    return currLongestPrefix;

}
