const tree = require('../index')

//递归
function inorderTraversal(root) {
    const result = [];
  
    function traverse(node) {
        if (node) {
            traverse(node.left); // 递归遍历左子树
            result.push(node.val); // 访问当前节点的值
            traverse(node.right); // 递归遍历右子树
        }
    }
    traverse(root); // 从根节点开始递归遍历
  
    return result;
}
//循环
function inorderTraversal(root) {
    const result = [];
    const stack = [];
    let curr = root;
  
    while (curr || stack.length > 0) {
        while (curr) {
            stack.push(curr); // 将当前节点入栈
            curr = curr.left; // 移动到左子节点
        }
      
        curr = stack.pop(); // 弹出栈顶节点
        result.push(curr.val); // 访问当前节点的值
        curr = curr.right; // 移动到右子节点
    }
  
    return result;
}

console.dir(inorderTraversal(tree), { depth: null })