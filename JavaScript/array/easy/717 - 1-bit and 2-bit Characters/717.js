/**
 * Time: 2018-11-7
 */

/**
 * 1比特与2比特字符 - 第一种解法
 * 执行时间：84ms
 * @param {number[]} bits
 * @return {boolean}
 */
var isOneBitCharacter = function(bits) {
    var arr = [];
    for (var i = 0; i < bits.length; ) {
        var item = String(bits[i]);
        var itemNext = String(bits[i + 1]);
        var str = item + itemNext;

        if (str === '10' || str === '11') {
            arr.push([item, itemNext]);
            i += 2
        } else {
            arr.push([item]);
            i++;
        }
    }

    return arr[arr.length - 1].length === 1;
};

/**
 * 1比特与2比特字符 - 第二种解法
 * 执行时间：52ms
 * @param {number[]} bits
 * @return {boolean}
 */
var isOneBitCharacter = function(bits) {
    let n = bits.length - 1;
    if (n < 1)
        return true;
    for (let i = n - 1; i >= 0; i--) {
        if (bits[i] == 0) {
            return ((n - i) & 1) === 1;
        }
    }
    return ((n - 1) & 1) === 1;
};

/**
 * 1比特与2比特字符 - 第三种解法
 * 执行时间：52ms
 * @param {number[]} bits
 * @return {boolean}
 */
var isOneBitCharacter = function(bits) {
    let i = 0;
    let is = false;
    while (i < bits.length) {
        if(bits[i] == 1){
            i += 2;
            is = false;
        }
        else{
            i +=1;
            is = true;
        }
    }
    return is;
};
/*
// 类似写法
const isOneBitCharacter = bits => {
  const loopLen = bits.length - 1;
  let i = 0;
  while (i < loopLen) {
    if (bits[i] === 1) {
      i += 2;
    } else {
      i += 1;
    }
  }
  return i === loopLen;
};
*/
