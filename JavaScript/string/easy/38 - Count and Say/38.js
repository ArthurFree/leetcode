/**
 * Time: 2018-9-19
 */

/**
 * 报数
 * 执行时间： 84ms
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    function getArr(len) {
        var arr = [];
        var str  = '';
        var temp = '';
        var count = 0;
        for (var i = 1; i <= len; i++) {
            if (i === 1) {
                arr.push(i.toString());
                str = i.toString();
            } else {
                count = 1;
                temp = '';
                for (var j = 0; j < str.length;j++) {
                    if (str[j] === str[j+1]) {
                        count++;
                    } else {
                        temp = temp + count + '' + str[j];
                        count = 1;
                    }
                }
                str = temp;
                arr.push(str);
            }
        }

        return arr;
    }
    var resultArr = getArr(n);
    return resultArr.pop();
};

/**
 * 报数 - 第二种解法
 * 执行时间：52ms
 * @param {number} n
 * @return {string}
 */
var countAndSay2 = function(n) {
    let str = '1';
    for (let i = 2; i <= n; i++) {
        str = saySomething(str);
    }
    return str;
}

var saySomething = function (s) {
    s += '';
    let str = '';
    let j;
    for (let i = 0; i < s.length;) {
        j = i + 1;
        while (s[i] === s[j]) {
            j++;
        }
        str += ((j - i) + s[i]);
        i = j;
    }
    return str;
}

/**
 * 报数 - 第三种解法
 * 执行时间：52ms
 * @param {number} n
 * @return {string}
 */
var countAndSay3 = function (n) {
    var s = '1';
    for (var i = 1; i < n; i++) {
        s = say(s);
    }
    return s;
};

function say (s) {
    var str = '';
    var i = 0;
    var num = 1;
    while (s[i]) {
        if (s[i] == s[i+1]) {
            num++;
        } else {
            str = str+num+s[i];
            num = 1;
        }
        i++;
    }
    return str;
}
