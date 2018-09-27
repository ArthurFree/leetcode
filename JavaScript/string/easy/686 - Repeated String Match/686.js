/**
 * Time: 2018-9-27
 */

/**
 * 重复叠加字符串匹配
 * 执行时间： 560ms
 * @param {string} A
 * @param {string} B
 * @return {number}
 */
var repeatedStringMatch = function(A, B) {
    var newA = A;
    var count = 1;
    if (A.indexOf(B) > -1) return 1;

    if (newA.length <= B.length) {
        while (newA.length <= 3 * B.length) {
            if (newA.indexOf(B) === -1) {
                newA += A;
                count++;
                continue;
            }

            return count;
        }
    } else {
        while (newA.length <= 3 * A.length) {
            if (newA.indexOf(B) === -1) {
                newA += A;
                count++;
                continue;
            }

            return count;
        }
    }

    return -1;
};

/**
 * 分析：
 * A 和 B 的长度有两种情况
 * A.length > B.length 字符串重复两次便可以涵盖所有情况
 * A.length < B.length 字符串重复 Math.ceil(B.length / A.length) + 1次便可以涵盖所有情况
 * 最后在重复过的字符串中查找 B
 */
/**
 * 重复叠加字符串匹配 - 第二种方法
 * 执行时间： 64ms
 * @param {string} A
 * @param {string} B
 * @return {number}
 */
var repeatedStringMatch2 = function (A, B) {
    var count = Math.ceil(B.length / A.length);
    var a = A.repeat(count);

    if (a.indexOf(B) > -1) {
        return count;
    } else {
        if ((a + A).indexOf(B) > -1) {
            return count + 1;
        }
        return -1;
    }
};

/**
 * 重复叠加字符串匹配 - 第二种方法
 * 执行时间： 68ms
 * @param {string} A
 * @param {string} B
 * @return {number}
 */
var repeatedStringMatch3 = function (A, B) {
    var lenB = B.length;
    var res = A;
    var cnt = 1;
    while (res.length < lenB) {
        res += A;
        cnt++;
    }
    if (res.indexOf(B) !== -1) {
        return cnt;
    }
    return -1;
};

/**
 * 重复叠加字符串匹配 - 第三种方法
 * 执行时间： 68ms
 * @param {string} A
 * @param {string} B
 * @return {number}
 */
var repeatedStringMatch4 = function (A, B) {
    var model = A;
    var count = 1;

    while (A.length < B.length) {
        a += model;
        count++;
    }

    if (~A.indexOf(B)) {
        return count;
    }
    A += model;
    if (~A.indexOf(B)) {
        return count + 1;
    }
    return -1;
}
