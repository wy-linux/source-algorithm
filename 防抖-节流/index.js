//防抖
function debounce(func, wait) {
    let timeoutId;
    
    return function (...args) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func.apply(this, args);
      }, wait);
    };
}
//节流
function throttle(func, delay) {
    let timeoutId;
    let lastTime = 0;
  
    return function(...args) {
      const currentTime = Date.now();
  
      if (currentTime - lastTime < delay) {
        // 在延迟时间内，忽略本次调用
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
          lastTime = currentTime;
          func.apply(this, args);
        }, delay);
      } else {
        // 超过延迟时间，立即执行函数
        lastTime = currentTime;
        func.apply(this, args);
      }
    };
}