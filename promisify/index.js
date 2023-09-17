function promisify(func) {
    return function (...args) {
        return new Promise((resolve, reject) => {
            // 在包装的函数内部调用原始函数
            func.call(this, ...args, (error, result) => {
                if (error) {
                    reject(error); // 如果有错误，拒绝 Promise
                } else {
                    resolve(result); // 否则，解决 Promise
                }
            })
        })
    }
}