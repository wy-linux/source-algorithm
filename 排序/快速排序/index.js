function quickSort(arr) {
    if (arr.length <= 1) {
      return arr; // 基线条件：数组为空或只包含一个元素，无需排序
    }
    const baseIndex = Math.floor(arr.length / 2); // 选择基准元素索引
    const base = arr.splice(baseIndex, 1)[0]; // 移除基准元素并获取基准值
    const left = [];
    const right = [];
  
    for (const item of arr) {
        if (item < base) {
            left.push(item);
        } else {
            right.push(item);
        }
    }
    // 递归地对左右两部分进行快速排序
    return quickSort(left).concat([base], quickSort(right));
}
// 示例用法
const arr = [5, 3, 7, 1, 8, 2, 4];
const sortedArr = quickSort(arr);
console.log(sortedArr); // 输出排序后的数