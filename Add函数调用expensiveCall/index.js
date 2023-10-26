// 实现一个 Add 函数，实现加法，但在 Add 函数中不允许直接使用 + 运算符
// 而是应该通过调用 expensiveCall 实现，
// expensiveCall 是一个昂贵的异步调用。
// 在实现 Add 函数时，
// 应该考虑尽可能少调用 expensiveCall 并且尽快的完成。
// 你可以理解成这个依赖的加法不是普通意义上的加法，
// 而是一个需要调用服务器（远端）完成的抽象操作。
const expensiveCall = async (a, b) => new Promise(resolve => {
    console.log("debugger call remote", a, b)
    setTimeout(() => resolve(a + b), 1000)
})
add([1, 2, 2, 2, 5]).then(result => {
    // result => 12
})
/**
串行执行，缓存优化
*/
async function add(arr) {
    // 需要实现的代码
    let res = arr[0]
    const cache = {}
    for (let i = 1; i < arr.length; i++) {
        const key = `${res}-${arr[i]}`
        if(cache[key]) {
            res = cache[key]
        } else {
            res = await expensiveCall(res, arr[i])
            cache[key] = res
        }
    }
    return res
}
/**
并行执行，提高执行效率
*/
async function add(arr) {
    // 需要实现的代码
    if (arr.length === 1) {
        return arr[0];
    }
    const mid = Math.floor(arr.length / 2);
    const leftSum = add(arr.slice(0, mid));
    const rightSum = add(arr.slice(mid));
    // 并发执行 expensiveCall
    const [leftResult, rightResult] = await Promise.all([leftSum, rightSum]);
    return expensiveCall(leftResult, rightResult);
}
