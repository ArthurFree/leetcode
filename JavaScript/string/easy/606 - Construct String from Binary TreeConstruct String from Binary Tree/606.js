/**
 * Time: 2018-9-24
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * 根据二叉树创建字符串
 * 执行时间： 84ms
 * @param {TreeNode} t
 * @return {string}
 */
var tree2str = function(t) {
    if (t === null) return '';
    var str = t.val + '';
    if (t.left !== null) {
        str += '(' + tree2str(t.left) + ')';
    } else if (t.right !== null) {
        str += '()';
    }

    if (t.right !== null) {
        str += '(' + tree2str(t.right) + ')';
    }
    return str;
};

/**
 * 根据二叉树创建字符串 - 第二种方法
 * 执行时间： 72ms
 * @param {TreeNode} t
 * @return {string}
 */
var tree2str2 = function(t) {
    let str = ''
    ,   visited = {}
    ,   arr = [t]
    ,   node = arr[0]
    ,   uid = 0;

    while (node) {
        if (visited[node.uid]) {
            arr.shift();
            str += ')';
        } else {
            node.uid = ++uid;
            visited[node.uid] = 1;
            str += '(' + node.val;
            if (node.left == null && node.right !== null) {
                str += '()';
            }
            if (node.right) {
                arr.unshift(node.right);
            }
            if (node.left) {
                arr.unshift(node.left);
            }
        }
        node = arr[0];
    }
    return str.substring(1, str.length - 1);
};

/**
 * 根据二叉树创建字符串 - 第三种方法
 * 执行时间： 84ms
 * @param {TreeNode} t
 * @return {string}
 */
var tree2str = function (t) {
    if (t === null) return '';
    let result = [];
    function listTree(node, result) {
        if (node === null) return;
        if (node.left === null && node.right === null) {
            result.push(node.val);
            return;
        }
        result.push(node.val);
        result.push('(');
        listTree(node.left, result);
        result.push(')');
        if (node.right !== null) {
            result.push('(');
            listTree(node.right, result);
            result.push(')');
        }
    }
    listTree(t, result);
    return result.join('');
}
