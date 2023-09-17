function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    // 将数组分成两个子数组
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);
  
    // 递归调用 mergeSort 对子数组进行排序
    const sortedLeft = mergeSort(left);
    const sortedRight = mergeSort(right);
  
    // 合并两个已排序的子数组
    return merge(sortedLeft, sortedRight);
}
  
function merge(leftArr, rightArr) {
    const result = [];  
    while (leftArr.length > 0 && rightArr.length > 0){  
      if (leftArr[0] < rightArr[0])  
        result.push(leftArr.shift()); //把最小的最先取出，放到结果集中   
      else   
        result.push(rightArr.shift());  
    }   
    return result.concat(leftArr).concat(rightArr);  //剩下的就是合并，这样就排好序
}
  
  // 示例用法
  const arr = [8, 3, 1, 5, 9, 2, 7, 4, 6];
  const sortedArr = mergeSort(arr);
  console.log(sortedArr); // 输出 [1, 2, 3, 4, 5, 6, 7, 8, 9]