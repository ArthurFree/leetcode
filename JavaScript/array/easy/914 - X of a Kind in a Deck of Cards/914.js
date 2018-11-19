/**
 * Time: 2018-11-19
 */

/**
 * 卡牌分组 - 第一种解法
 * 执行时间：100ms
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX = function(deck) {
    if (deck.length < 2) return false;
    var map = {};
    var isEven = null;
    for (var i = 0; i < deck.length; i++) {
        var item = deck[i];
        if (map[item]) {
            map[item]++;
        } else {
            map[item] = 1;
        }
    }

    var min = map[deck[0]];
    for (var key in map) {
        if (map[key] <= min) {
            min = map[key];
        }
    }

    if (min < 2) return false;

    var flag;
    for (var i = 2; i <= min; i++) {
        flag = true;
        for (var k in map) {
            if (map[k] % i !== 0) {
                flag = false;
                break;
            }
        }

        if (flag) return true;
    }

    return false;
};

/**
 * 卡牌分组 - 第二种解法
 * 执行时间：72ms
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX = function(deck) {
    const counter = {};
    deck.forEach(card => {
        if (!counter[card]) {
            counter[card] = 0;
        }
        counter[card]++;
    });

    const counts = Object.values(counter);
    const min = Math.min.apply(null, counts);
    if (min < 2) {
        return false;
    }

    for (let j = 2; j <= min; j++) {
        let flag = true;
        for (let i = 0; i < counts.length; i++) {
            if (counts[i] % j !== 0) {
                flag = false;
                break;
            }
        }
        if (flag) {
            return true;
        }
    }

    return false;
};

/**
 * 卡牌分组 - 第三种解法
 * 执行时间：80ms
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX = function(deck) {
    if(deck.length<=1){
        return false
    }
    var map = new Map();
    deck.forEach((item)=>{
        var n = map.get(item) ? map.get(item) : 0;
        map.set(item , n+1)
    })
	var arr = [...map.values()]
    return getCommonDivisor(arr)

};
//公约数
function getCommonDivisor(arr){
    var n = arr.length;
    var min = Math.min(...arr)
    var status = false ;
    for(var i = 2 ; i <= min ; i ++){
        for(var j = 0 ; j < n ; j ++ ){
            if(arr[j]%i!=0){
                break;
            }else if(j==n-1){
                status = true
            }
        }
        if(status){
            return true
        }
    }
    return status
}
