const initState = {
    tasks: [
        {id: '1', title: 'help me find peach', content: 'blah blah blah'},
        {id: '2', title: 'collect all the stars', content: 'blah blah blah'},
        {id: '3', title: 'egg hunt with yoshi', content: 'blah blah blah'}
    ]
}

const taskReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_TASK':
            console.log('created task', action.task)
    }
    return state
}

export default taskReducer 