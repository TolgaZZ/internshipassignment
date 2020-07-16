export const createTask = (task) => {
    return (dispatch, getState) => {
        //asycn call to db
        dispatch({ type : 'CREATE_TASK', task});
    }
};