/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var reverseStr, str = String(x);
    var arr = str.split("").reverse();
    var min = -(1 << 30) * 2;
    var max = (1 << 30) * 2 - 1;

    if (x < 0) {
        arr.pop();
        reverseStr = Number(arr.join("")) * (-1);
        return reverseStr < min ? 0 : reverseStr;
    }

    reverseStr = Number(arr.join(""));

    return reverseStr > max ? 0 : reverseStr;
};
