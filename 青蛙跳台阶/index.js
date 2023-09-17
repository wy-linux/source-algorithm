/**
一只青蛙一次可以跳上1级台阶，也可以跳上2级台阶。求该青蛙跳上一个 n 级的台阶总共有多少种跳法。
n=1: f(n) = 1
n=2: f(n) = 2
n>2: f(n) = f(n-1) + f(n-2)
*/

//递归
function numWays(n) {
    if(n <= 2) {
        return n
    }
    return numWays(n - 1) + numWays(n - 2)
};

//循环
const numWays = function(n) {
    if(n <= 2) {
        return n
    }
    let last1 = 2, last2 = 1
    for(let i = 3; i <= n ; i++) {
        // last1 = last2 + (last2 = last1)
        last1 = last1 + last2
        last2 = last1 - last2
    }
    return last1
};

console.log(numWays(10))