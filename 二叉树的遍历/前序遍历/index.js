const tree = require('../index')

//递归
function preorderTraversal(root) {
    const result = [];
  
    function traverse(node) {
        if (node) {
            result.push(node.val); // 访问当前节点的值
            traverse(node.left); // 递归遍历左子树
            traverse(node.right); // 递归遍历右子树
        }
    }
    traverse(root); // 从根节点开始递归遍历
  
    return result;
}
//循环
function preorderTraversal(root) {
    const result = [];
    const stack = [];
  
    if (root) {
        stack.push(root); // 将根节点入栈
    }
  
    while (stack.length > 0) {
        const node = stack.pop(); // 弹出栈顶节点
        result.push(node.val); // 访问当前节点的值
        
        // 先将右子节点入栈，再将左子节点入栈
        if (node.right) {
            stack.push(node.right);
        }
        if (node.left) {
            stack.push(node.left);
        }
    }
  
    return result;
}

console.dir(preorderTraversal(tree), { depth: null })