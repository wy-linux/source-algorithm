function bubbleSort(arr) {
    const length = arr.length;

    for (let i = 0; i < length - 1; i++) {
        for (let j = 0; j < length - 1 - i; j++) {
            // 比较相邻的两个元素，如果顺序不正确，则交换它们
            if (arr[j] > arr[j + 1]) {
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
  return arr;
}
  
// 示例用法
const arr = [8, 3, 1, 5, 9, 2, 7, 4, 6];
const sortedArr = bubbleSort(arr);
console.log(sortedArr); // 输出 [1, 2, 3, 4, 5, 6, 7, 8, 9]