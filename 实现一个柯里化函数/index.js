//实现一个柯里化函数
function add(a, b, c) {
    return a + b + c;
}

function curry(fn) {
    return function curried(...args) {
        if (args.length >= fn.length) {
            return fn.apply(this, args);
        } else {
            return function (...moreArgs) {
                return curried.apply(this, args.concat(moreArgs));
            };
        }
    };
}

const curriedAdd = curry(add);
console.log(curriedAdd(2)(3)(4)); // Output: 9
console.log(curriedAdd(2, 3)(4)); // Output: 9
console.log(curriedAdd(2)(3, 4)); // Output: 9