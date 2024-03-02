/**
 * 一个 memorize 函数
 * @param originalFunc 原始函数
 * @param argsIdentifier 一个参数的序列化函数，入参是原始的参数列表，返回值是可以代表当前参数列表的唯一特征，会被用来判断是否命中缓存
 * @param maxCacheSize 最大的缓存池容量，当超出后会按照 LRU 的原则去清空
 * @returns 一个有 cache 能力的函数，入参和返回值相比以前不变
 */
function memorize(originalFunc, argsIdentifier, maxCacheSize) {
  // TODO
  const cache = new Map(); // 使用 Map 作为缓存对象，key 是参数的唯一特征，value 是对应的结果
  const cacheKeys = []; // 用于记录缓存 key 的访问顺序

  return function (...args) {
    const key = argsIdentifier(...args); // 根据参数的序列化结果生成一个唯一特征的 key

    if (cache.has(key)) { // 如果缓存中已经有该 key
      // 更新 cacheKeys 中对应的 key 的访问顺序
      const index = cacheKeys.indexOf(key);
      cacheKeys.splice(index, 1);
      cacheKeys.push(key);

      return cache.get(key); // 直接返回缓存中的结果
    }

    // 执行原始函数并保存结果
    const result = originalFunc.apply(this, ...args);
    cache.set(key, result);
    cacheKeys.push(key);

    // 如果缓存超过了指定的最大容量，则按照 LRU 原则清除最旧的缓存
    if (cache.size > maxCacheSize) {
      const oldestKey = cacheKeys.shift();
      cache.delete(oldestKey);
    }

    return result;
  };
}
// 一个普通的两数相加函数
function add(a, b) {
  console.log(`执行了， 参数为 ${a}, ${b}`, this);
  return a + b;
}

// 将参数的两数组成一个字符串序列，用来作为缓存 key，生成一个带缓存版本的两数相加
const memorizeAdd = memorize(add, (a, b) => [a, b].join(','), 2);
const Foo = { memorizeAdd };

// 执行多次加法
console.log('结果1：', Foo.memorizeAdd(1,2));
console.log('结果2：', Foo.memorizeAdd(1,2));
console.log('结果3：', Foo.memorizeAdd(1,2));
console.log('结果4：', Foo.memorizeAdd(1,3));
console.log('结果5：', Foo.memorizeAdd(1,4));
console.log('结果6：', Foo.memorizeAdd(1,2));
console.log('结果7：', Foo.memorizeAdd(1,4));

/**
 预期输出如下
 执行了， 参数为 1, 2,  { memorizeAdd：f }
 结果 1： 3
 结果 2： 3
 结果 3： 3
 执行了， 参数为 1, 3,  { memorizeAdd: f }
 结果 4： 4
 执行了， 参数为 1, 4,  { memorizeAdd: f }
 结果 5： 5
 执行了， 参数为 1, 2,  { memorizeAdd：f }
 结果 6： 3
 */
