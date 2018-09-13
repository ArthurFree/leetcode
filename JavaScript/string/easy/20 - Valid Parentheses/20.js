/**
 * Time: 2018-9-13
 */

/**
 * 有效的括号
 * 执行时间： 104ms
 * @param {string[]} arr
 */
var isVaild = function (str) {
    if (str.length % 2 !== 0) return false;
    if (str === '') return true;
    const map = {
        '(': ')',
        '[': ']',
        '{': '}',
    };
    const stack = [];

    for (let i = 0, len = str.length; i < len; i++) {
        const item = str.charAt(i);

        if (map[item]) {
            stack.push(map[item]);
        } else if (stack.pop() !== item) {
            return false;
        }
    }

    return stack.length === 0;
}
