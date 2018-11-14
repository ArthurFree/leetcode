/**
 * Time: 2018-11-14
 */

/**
 * 单调数列 - 第一种解法
 * 执行时间：128ms
 * @param {number[]} A
 * @return {boolean}
 */
var isMonotonic = function(A) {
    var dir = 0; // 0: = 1: > 2: <
    var ans = true;

    for (var i = 0; i < A.length; ++i) {
        if (A[i] > A[i + 1]) {
            if (dir == 0) {
                dir = 2;
            } else if (dir == 1) {
                return false;
            }
        } else if (A[i] < A[i + 1]) {
            if (dir == 0) {
                dir = 1;
            } else if (dir == 2) {
                return false;
            }
        }
    }

    return ans;
};

/**
 * 单调数列 - 第二种解法
 * 执行时间：100ms
 * @param {number[]} A
 * @return {boolean}
 */
var isMonotonic = function(A) {
    let temp = A[0];
    let arrow = null;

    for(let i = 1; i < A.length; i+=1) {
        const a = A[i];

        if(!arrow) {
            if(a !== temp) {
                arrow = a > temp ? '>' : '<';
            }
        } else if(arrow === '>' && temp > a) {
            return false;
        } else if(arrow === '<' && temp < a) {
            return false;
        }

        temp = a;
    }

    return true;
};

/**
 * 单调数列 - 第三种解法
 * 执行时间：116ms
 * @param {number[]} A
 * @return {boolean}
 */
var isMonotonic = function(A) {
    if(increase(A) || decrease(A)){
        return true
    }else{
        return false;
    }
};
function increase(A){
    for(var i=0;i<A.length;i++){
        if(A[i]>A[i+1]){
            return false;
        }
    }
    return true;
}
function decrease(A){
    for(var i=0;i<A.length;i++){
        if(A[i]<A[i+1]){
            return false;
        }
    }
    return true
}

/**
 * 单调数列 - 第四种解法
 * 执行时间：124ms
 * @param {number[]} A
 * @return {boolean}
 */
var isMonotonic = function(A) {
    let arr = A.map((x,i) => {
        if (i !== A.length - 1) {
            return A[i+1] - x
        } else {
            return x
        }
    })
    arr.pop()

    if (arr.every(x => x>=0) || arr.every(x => x<=0)) {
        return true
    } else {
        return false
    }
};
