// 有序数组 A 和 B, 请写一个函数，判断 B 是否为 A 的子集 
// 输入：A = [1,2,3,4], B=[2,2,4] 
// 输出：true 
function isSubset(A, B) {
    // 将数组 A 转换为集合（Set），以便快速查找
    const setA = new Set(A);
    // 遍历数组 B，检查每个元素是否存在于集合 setA 中
    for (const element of B) {
        if (!setA.has(element)) {
            return false;
        }
    }
    // 如果遍历完数组 B 后都没有返回 false，则 B 是 A 的子集
    return true;
}

function isSubset(A, B) {
    let i = 0; // 指向数组 A 的指针
    let j = 0; // 指向数组 B 的指针
    while (i < A.length && j < B.length) {
        if (A[i] === B[j]) {
            j++; // 匹配成功，移动 B 的指针
        } else {
            i++; // 匹配失败，移动 A 的指针
        }
    }
    // 如果 B 的指针移动到了末尾，说明 B 是 A 的子集
    return j === B.length;
}

// 示例用法
const A = [1, 2, 3, 4];
const B = [2, 2, 4];
const result = isSubset(A, B);
console.log(result); // 输出 t
