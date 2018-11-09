/**
 * Time: 2018-11-9
 */

/**
 * 较大分组的位置 - 第一种解法
 * 执行时间：128ms
 * @param {string} S
 * @return {number[][]}
 */
var largeGroupPositions = function(S) {
    var count = 1;
    var startIndex = 0;
    var arr = [];

    for (var i = 1; i < S.length; i++) {
        if (S.charAt(i) === S.charAt(i - 1)) {
            count++;
            if (i ===  S.length - 1 && count >= 3) arr.push([startIndex, i]);
        } else if (count >= 3) {
            arr.push([startIndex, i - 1]);
            startIndex = i;
            count = 1;
        } else {
            startIndex = i;
            count = 1;
        }
    }

    return arr;
};

/**
 * 较大分组的位置 - 第二种解法
 * 执行时间：72ms
 * @param {string} S
 * @return {number[][]}
 */
var largeGroupPositions = function(S) {
    let result = [];
    let startIndex = 0;
    let endIndex = 0;
    let curValue = S[0];
    for (let i = 1; i <= S.length; i++) {
        if(curValue == S[i]){
            endIndex = i;
        }
        else{
            if(endIndex - startIndex >= 2){
                result.push([startIndex, endIndex]);
            }
            curValue = S[i];
            startIndex = endIndex = i;
        }
    }
    return result;
};
