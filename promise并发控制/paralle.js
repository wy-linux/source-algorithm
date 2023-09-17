class SuperTask {
    constructor(parallelCount = 2) {
        this.parallelCount = parallelCount
        this.tasks = []
        this.runningCount = 0
    }
    add(task) {
        return new Promise((resolve, reject) => {
            this.tasks.push({
                task,
                resolve,
                reject
            })
            this._run()
        })
    }
    _run() {
        while (this.runningCount < this.parallelCount && this.tasks.length > 0) {
            const { task, resolve, reject } = this.tasks.shift()
            this.runningCount++
            task()
                .then(resolve, reject)
                .finally(() => {
                    this.runningCount--
                    this._run()
                })
        }
    }
}

const superTask = new SuperTask()
function addTask(time, name) {
    superTask
        .add(() =>  {
            return new Promise((resolve, reject) => {
                console.time(name)
                setTimeout(() => {
                    console.timeEnd(name)
                    resolve()
                }, time)
            })
        })
        .then(() => console.log(`任务${name}完成`))
}
addTask(10000, 1)
addTask(5000, 2)
addTask(3000, 3)
addTask(4000, 4)
addTask(5000, 5)
