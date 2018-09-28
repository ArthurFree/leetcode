/**
 * Time: 2018-9-28
 */

/**
 * 亲密字符串
 * 执行时间：56ms
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var buddyStrings = function(A, B) {
    if (A.length !== B.length) return false;
    var arr = [];
    var obj = {};
    if (A === B) {
        for (var j = 0; j < A.length; j++) {
            obj[A[j]] = !obj[A[j]] ? 1 : ++obj[A[j]];
            if (obj[A[j]] >= 2) return true;
        }
        return false;
    }
    for (var i = 0; i < A.length; i++) {
        if (A[i] !== B[i]) {
            arr.push(i);
        }
    }

    if (arr.length === 2) {
        var str = '';
        var strArr = A.split('');
        var temp = strArr[arr[0]];
        strArr[arr[0]] = strArr[arr[1]];
        strArr[arr[1]] = temp;

        str = strArr.join('');

        if (str === B) return true
    }

    return false;
};

/**
 * 亲密字符串 - 第二种解法
 * 执行时间：52ms
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var buddyStrings2 = function (A, B) {
    let set = '';
    let misMathchCounter = 0;
    // edge case 1 - not the same length
    if (A.length !== B.length) return false;
    // edge case 2 - two letter words
    if (A.length < 3) {
        if (A !== B[1] + B[0]) {
            return false;
        } else {
            return true;
        }
    }

    // edge case 3 - they are the same word
    if (A === B) {
        // check there are two letters that are same and swappable
        set = new Set();
        for (let k = 0; k < A.length; k++) {
            if (set.has(A[k])) {
                return true;
            } else {
                set.add(A[k]);
            }
        }
        // if there are not swappable characters then return false
        return false;
    }

    for (let i = 0; i < A.length; i++) {
        // loop through until find mismatch
        if (A[i] !== B[i]) {
            misMathchCounter++;
            // if there are already two mis match, then return false. no reason to go though the rest of the loop
            if (misMathchCounter > 2) return false;
            // if this is the first mis match, then make the array
            if (set.wlength === 0) {
                set = A[i] + B[i];
                // if misMatch array already exist, compare if they are swappable.
                // if they are not swappable, exit.No reason to go through the rest of the loop
            } else {
                if (set !== B[i] + A[i]) return false;
            }
        }
    }
    // at the end of the loop, there is only one mistach return false
    if (misMatchCounter < 2) {
        return false;
    } else {
        return true;
    }
}

/**
 * 亲密字符串 - 第三种解法
 * 执行时间：56ms
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var buddyStrings = function (A, B) {
    if (A.length !== B.length) return false;
    if (A.length < 2) return false;
    let first = -1;
    let second = -1;

    for (let i = 0; i < A.length; i++) {
        if (A[i] !== B[i]) {
            if (first == -1) first = i;
            else if (second == -1) second = i;
            else return false;
        }
    }

    if (first == -1 || second == -1) {
        let x = new Array(26).fill(0);
        for (let i = 0; i < A.length; i++) {
            if (++x[A.charCodeAt(i) - 97] == 2) return true;
        }
        return false;
    }

    if (A[second] === B[first] && A[first] == B[second]) return true;
    return false;
}

/**
 * 亲密字符串 - 第四种解法
 * 执行时间：56ms
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var buddyStrings = function(A, B) {
    if(A.length != B.length) return false;

    if(A == B) {
        var map = new Set();
        for(var i = 0; i < A.length; i++) {
            if(map.has(A.charAt(i))) {
                return true;
            }
            map.add(A.charAt(i))
        }
        return false;
    }

    var d1 = -1,d2 = -1;
    for(var i = 0; i < A.length; i++) {
        if(A.charAt(i) != B.charAt(i)) {
            if(d1 == -1) {
                d1 = i;
            } else if(d2 == -1) {
                d2 = i;
            } else {
                return false;
            }
        }
    }
    if(d2 != -1) {
        if(A.charAt(d1) == B.charAt(d2) && A.charAt(d2) == B.charAt(d1)) return true;
        return false;
    } else {
        return false
    }
};
