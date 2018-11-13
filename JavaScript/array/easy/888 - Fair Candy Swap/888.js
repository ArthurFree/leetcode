/**
 * Time: 2018-11-13
 */

/**
 * 公平的糖果交换 - 第一种解法
 * 执行时间：2168ms
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
let fairCandySwap = function(A, B) {
    let sumA = 0, sumB = 0;
    let result = [];
    for (let i = 0; i < A.length; i++) {
        sumA += a;
    }
    for (let i = 0; i < B.length; i++) {
        sumB += b;
    }
    for (let i = 0; i < A.length; i++) {
        let a = A[i];
        for (let j = 0; j < B.length; j++) {
            let b = B[j];
            let tmpA = sumA - a + b;
            let tmpB = sumB - b + a;
            if (tmpA == tmpB) {
                result[0] = a;
                result[1] = b;
                break;
            }
        }
    }

    return result;
};

/**
 * 公平的糖果交换 - 第二种解法
 * 执行时间：104ms
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var fairCandySwap = function(A, B) {
    const change = (B.reduce((p, v) => p + v) - A.reduce((p, v) => p + v)) / 2
    for (let i = A.length; i--; ) {
        const where = B.indexOf(A[i] + change)
        if (where > -1) return [A[i], A[i] + change]
    }
    return [0, 0]
};

/**
 * 公平的糖果交换 - 第三种解法
 * 执行时间：116ms
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var fairCandySwap = function(A, B) {
    var sumA = 0;
    var sumB = 0;
    var lenA = A.length;
    var lenB = B.length;
    var minus = 0;
    var add = 0;
    dictB = {};
    for(var i=0;i<lenA;i++){
        sumA+=A[i];
    }

    for(var i=0;i<lenB;i++){
        sumB+=B[i];
        dictB[B[i]] = true;
    }

    minus = sumA - sumB;
    add = minus/2;

    for(var i=0;i<lenA;i++){
        if(dictB[A[i]-add]!=undefined){
            return [A[i], A[i]-add]
        }
    }

};

/**
 * 公平的糖果交换 - 第四种解法
 * 执行时间：120ms
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var fairCandySwap = function(A, B) {
    let sumA = 0;
    let sumB = 0;
    let mapB = new Map();
    A.forEach(item => sumA += item);
    B.forEach((item,index) => {
         sumB += item
         mapB.set(item,index);
    });
    let diff = Math.abs(sumA - sumB) / 2;
    let mean =  sumA - sumB > 0;
    for(let i = 0; i < A.length;i++){
        let d = mean ? A[i] - diff : A[i] + diff
        if(mapB.get(d) != undefined){
            return [A[i],d];
        }
    }
};
