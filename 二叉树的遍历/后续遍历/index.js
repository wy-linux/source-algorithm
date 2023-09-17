const tree = require('../index')

//递归
function postorderTraversal(root) {
    const result = [];
  
    function traverse(node) {
        if (node) {
            traverse(node.left); // 递归遍历左子树
            traverse(node.right); // 递归遍历右子树
            result.push(node.val); // 访问当前节点的值
        }
    }
    traverse(root); // 从根节点开始递归遍历
  
    return result;
}
//循环
function postorderTraversal(root) {
    const result = [];
    const stack = [];
    let curr = root;
    let lastVisited = null;
  
    while (curr || stack.length > 0) {
        while (curr) {
            stack.push(curr); // 将当前节点入栈
            curr = curr.left; // 移动到左子节点
        }
      
        const peek = stack[stack.length - 1]; // 查看栈顶节点
      
        if (peek.right && peek.right !== lastVisited) {
            // 如果栈顶节点有右子节点且右子节点未被访问过
            curr = peek.right; // 移动到右子节点
        } else {
            result.push(peek.val); // 访问当前节点的值
            lastVisited = stack.pop(); // 弹出栈顶节点
        }
    }
  
    return result;
}

console.dir(postorderTraversal(tree), { depth: null })