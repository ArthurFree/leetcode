/**
 * Time: 2018-9-24
 */

/**
 * 机器人能偶返回原点
 * 执行时间： 88ms
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    var vCount = 0;
    var hCount = 0;
    for (var i = 0; i < moves.length; i++) {
        switch (moves[i]) {
            case 'R':
                hCount++;
                break;
            case 'L':
                hCount--;
                break;
            case 'U':
                vCount++;
                break;
            case 'D':
                vCount--;
                break;
            default:
                break;
        }
    }

    if (vCount === 0 && hCount === 0) return true;

    return false;
};

/**
 * 机器人能偶返回原点 - 第二种解法
 * 执行时间： 88ms
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle2 = function(moves) {
    var horizon = 0
    ,   vertical = 0;
    var operate = {
        R: function() {
            horizon++;
        },
        L: function() {
            horizon--;
        },
        U: function() {
            vertical++;
        },
        D: function() {
            vertical--;
        }
    }

    for (var i moves.length; i--;) {
        operate[moves[i]]();
    }

    return horizon === 0 && vertical === 0;
};

/**
 * 机器人能偶返回原点 - 第三种解法
 * 执行时间： 88ms
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle3 = function(moves) {
    let v = 0, h = 0;
    for (let move of moves) {
      switch (move) {
        case 'U': v += 1; break;
        case 'D': v -= 1; break;
        case 'L': h += 1; break;
        case 'R': h -= 1; break;
      }
    }
    return v === 0 && h === 0
  };
