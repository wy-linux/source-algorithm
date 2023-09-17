let arr = [
    { id: 1, name: '部门1', pid: 0 },
    { id: 2, name: '部门2', pid: 1 },
    { id: 3, name: '部门3', pid: 1 },
    { id: 4, name: '部门4', pid: 3 },
    { id: 5, name: '部门5', pid: 4 },
    { id: 6, name: '部门6', pid: 0 },
]
/**
 * 递归版本
 */
function toTree(arr, pid) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].pid === pid) {
        let children = toTree(arr, arr[i].id);
        if (children.length > 0) {
          arr[i].children = children;
        }
        result.push(arr[i]);
      }
    } 
    return result;
}

// let tree = toTree(arr, 0);

/**
 * map优化版本
 */
function toTree(arr) {
  let result = []
  let map = {}
  arr.forEach(item => map[item.id] = item)
  arr.forEach(item => {
    const parent = map[item.pid]
    if(parent) {
      (parent.children || (parent.children = [])).push(item)
    } else {
      result.push(item)
    }
  })
  return result
}

let tree = toTree(arr)

// console.log(JSON.stringify(tree, null, 2))
console.dir(tree, { depth: null })