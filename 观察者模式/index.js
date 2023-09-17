// 创建一个主题（Subject）
class Subject {
    constructor() {
        // 用于存储观察者列表
        this.observers = [];
    }
  
    // 添加观察者
    addObserver(observer) {
        this.observers.push(observer);
    }
  
    // 移除观察者
    removeObserver(observer) {
        this.observers = this.observers.filter(obs => obs !== observer);
    }
  
    // 通知观察者
    notify(data) {
        this.observers.forEach(observer => {
            observer.update(data);
        });
    }
}
  
  // 创建一个观察者（Observer）
  class Observer {
    constructor(name) {
        this.name = name;
    }
  
    // 观察者的更新方法
    update(data) {
        console.log(`${this.name} received data:`, data);
    }
  }
  
  // 创建一个主题实例
  const subject = new Subject();
  // 创建观察者实例
  const observer1 = new Observer('Observer 1');
  const observer2 = new Observer('Observer 2');
  // 添加观察者到主题
  subject.addObserver(observer1);
  subject.addObserver(observer2);
  
  // 通知观察者
  subject.notify('Hello, world!');
  // 移除观察者
  subject.removeObserver(observer2);
  // 再次通知观察者
  subject.notify('Goodbye!');