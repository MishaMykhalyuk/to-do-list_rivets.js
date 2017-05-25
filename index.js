const rootElement = document.getElementById('app')

const appModel = {
    tasks: [
        {
            name: "Read twitter",
            isDone: false
        },
        {
            name: "Commit changes",
            isDone: true
        }
    ],
    taskName: '',
    addTask(event, model){
        model.tasks.push({
            name: model.taskName,
            isDone: false
        })

        model.taskName = ''
    },
    removeTask(event, model){
        model.tasks.splice(model.index, 1)
    },
    removeAllDone(event, model){
        model.tasks
            .filter(task => task.isDone)
            .forEach(task => {
                const taskIndex = model.tasks.findIndex(item => item === task)

                model.tasks.splice(taskIndex, 1)
            })
    }
}

rivets.binders['strike'] = (element, value) => {
    if(value){
        element.style.textDecoration = 'line-through'
    } else {
        element.style.textDecoration = 'none'
    }
}

rivets.bind(rootElement, appModel)