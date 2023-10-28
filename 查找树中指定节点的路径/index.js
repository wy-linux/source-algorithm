//查找树中特定ID节点的路径
class TreeNode {
    constructor(id, children = []) {
        this.id = id;
        this.children = children;
    }
}
const tree = new TreeNode(1, [
    new TreeNode(2, [
        new TreeNode(3),
        new TreeNode(4),
    ]),
    new TreeNode(5),
]);

/**
两层函数，需要全局数组存储id
正向递归
 */
function findNodePath(root, targetId) {
    const path = [];

    function findPath(node, targetId) {
        // if (!node) return false;

        path.push(node.id);

        if (node.id === targetId) {
            return true;
        }

        for (const child of node.children) {
            if (findPath(child, targetId)) {
                return true;
            }
        }

        path.pop();
        return false;
    }

    findPath(root, targetId);

    if (path.length > 0 && path[path.length - 1] === targetId) {
        return path;
    } else {
        return null; // 未找到目标节点
    }
}

/**
一层递归函数搞定
反向递归，找到节点后一层一层返回节点
 */
function findNodePath(node, targetId) {
    if (node.id === targetId) {
        return [node.id];
    }

    for (const child of node.children) {
        const path = findNodePath(child, targetId);
        if (path.length > 0) {
            return [node.id, ...path];
        }
    }

    return [];
}

const targetId = 3;
console.log(findNodePath(tree, targetId))
