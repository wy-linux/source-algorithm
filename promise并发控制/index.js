function paralleTask(tasks, paralleCount = 2) {
    return new Promise((resolve, reject) => {
        if(tasks.length === 0) {
            resolve()
            return 
        }
        let nextIndex = 0
        let finishCount = 0
        function _run() {
            const task = tasks[nextIndex]
            nextIndex ++
            task().then(() => {
                finishCount ++
                if(nextIndex < tasks.length) {
                    _run()
                } else if(finishCount === tasks.length) {
                    resolve()
                }   
            })
        }
        for(let i = 0; i < paralleCount && i < tasks.length; i++) {
            _run()
        }
    })
}

const tasks = new Array(10)
for(let i = 0; i < tasks.length; i++) {
    tasks[i] = () => (
        new Promise((resolve, reject) => {
            console.time(`task${i}`)
            setTimeout(() => {
                resolve()
                console.timeEnd(`task${i}`)
            }, 3000)
        })
    )
}

paralleTask(tasks, 3).then(() => {
    console.log('全部执行完毕')
})
