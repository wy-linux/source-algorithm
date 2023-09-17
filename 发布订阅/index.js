// 创建一个事件管理器
class EventEmitter {
    constructor() {
        // 用于存储事件及其对应的回调函数
        this.events = {};
    }
  
    // 订阅事件
    subscribe(eventName, callback) {
        // 如果事件不存在，则创建一个空数组
        if (!this.events[eventName]) {
            this.events[eventName] = [];
        }
        // 将回调函数添加到事件的回调函数列表中
        this.events[eventName].push(callback);
    }
  
    // 发布事件
    publish(eventName, data) {
        // 如果事件存在，则依次调用事件的回调函数
        if (this.events[eventName]) {
            this.events[eventName].forEach(callback => {
                callback(data);
            });
        }
    }
  
    // 取消订阅事件
    unsubscribe(eventName, callback) {
        // 如果事件存在，则从回调函数列表中移除指定的回调函数
        if (this.events[eventName]) {
            this.events[eventName] = this.events[eventName].filter(cb => cb !== callback);
        }
    }
  }
  
  // 创建一个事件管理器实例
  const eventManager = new EventEmitter();
  // 定义事件名称和回调函数
  const eventName = 'myEvent';
  const callback = data => {
    console.log('Event triggered:', data);
  };
  
  // 订阅事件
  eventManager.subscribe(eventName, callback);
  // 发布事件
  eventManager.publish(eventName, 'Hello, world!');
  // 取消订阅事件
  eventManager.unsubscribe(eventName, callback);