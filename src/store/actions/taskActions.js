export const createTask = (task) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        //asycn call to db
        const firestore = getFirestore();
        firestore.collection('tasks').add({
            //... = spread operator spreading the properties
            ...task, 
            authorId: 12345,
            createdAt: new Date()

        }).then(() => {
            dispatch({ type : 'CREATE_TASK', task});
        }).catch((err) => {
            dispatch({ type: 'CREATE_TASK_ERROR', err})
        })
    }
};