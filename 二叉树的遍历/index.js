// 定义二叉树节点对象
function TreeNode(val) {
    this.val = val;
    this.left = null;
    this.right = null;
}
  
// 创建二叉树
const root = new TreeNode(5);       // 根节点
root.left = new TreeNode(4);        // 左子节点
root.right = new TreeNode(6);       // 右子节点
root.left.left = new TreeNode(1);   // 左子节点的左子节点
root.left.right = new TreeNode(2);  // 左子节点的右子节点
root.right.left = new TreeNode(7);  // 右子节点的左子节点
root.right.right = new TreeNode(8); // 右子节点的右子节点

module.exports = root