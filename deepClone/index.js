const cache = new WeakMap()

function deepClone(value) {
    //原始类型直接返回
    if(typeof value != 'object' || typeof value === null) {
        return value
    }
    //处理map类型的数据
    if (value instanceof Map) {
        const clone = new Map()
        value.forEach((val, key) => {
            clone.set(key, deepClone(val));
        })
        return clone
    }
    const cached = cache.get(value)
    //防止死递归克隆
    if(cached) {
        return cached
    }

    const result = Array.isArray(value) ? [] : {}
    Object.setPrototypeOf(result, Object.getPrototypeOf(value))
    cache.set(value, result)

    for(const key in value) {
        if(value.hasOwnProperty(key)) {
            result[key] = deepClone(value[key])
        }
    }

    return result
}

const obj = {
    a: 1,
    b: 2,
    c: {
        k: 3,
        j: 5
    },
    d: function() {},
    e: new Map([[1, 2]])
}

obj.f = obj
const cloned = deepClone(obj)

console.dir(cloned, { depth: null })