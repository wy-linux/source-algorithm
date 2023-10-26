/**
给你二叉树的根节点 root 和一个表示目标和的整数 targetSum 。
判断该树中是否存在 根节点到叶子节点 的路径，这条路径上所有节点值相加等于目标和 targetSum 。
如果存在，返回 true ；否则，返回 false 。

输入：root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22
输出：true

输入：root = [1,2,3], targetSum = 5
输出：false
*/
function TreeNode(val) {
    this.val = val;
    this.left = null;
    this.right = null;
}
const root = new TreeNode(5);
root.left = new TreeNode(4);
root.right = new TreeNode(8);
root.left.left = new TreeNode(11);
root.left.left.left = new TreeNode(7);
root.left.left.right = new TreeNode(2);
root.right.left = new TreeNode(13);
root.right.right = new TreeNode(4);
root.right.right.right = new TreeNode(1);

// 递归
function hasPathSum(root, targetsum) {
    const traversal = (node, cnt) => {
        // 遇到叶子节点，并且计数为0
        if (cnt === 0 && !node.left && !node.right) return true;
        // 遇到叶子节点而没有找到合适的边(计数不为0)，直接返回
        if (!node.left && !node.right) return false;
        //  左（空节点不遍历）.遇到叶子节点返回true，则直接返回true
        if (node.left && traversal(node.left, cnt - node.left.val)) return true;
        //  右（空节点不遍历）  
        if (node.right && traversal(node.right, cnt - node.right.val)) return true;
        return false;
    };
    if (!root) return false;
    return traversal(root, targetsum - root.val);
}

//循环
const hasPathSum = (root, targetSum) => {
    if (!root) return false;
    const queue = [];
    queue.push(root);
    while (queue.length > 0) {
        const node = queue.shift();
        if (!node.left && !node.right && node.val === targetSum) {
            return true;
        }
        if (node.left) {
            node.left.val += node.val;
            queue.push(node.left);
        }
        if (node.right) {
            node.right.val += node.val;
            queue.push(node.right);
        }
    }
    return false;
};

const targetSum = 22;
console.log(hasPathSum(root, targetSum)); 