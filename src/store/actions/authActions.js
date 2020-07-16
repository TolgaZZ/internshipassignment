export const signIn = (credential) => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();

        firebase.auth().signInWithEmailAndPassword(
            credential.email,
            credentials.password
        ).then(() => {
            dispatch({ type: 'LOGIN_SUCCES'});
        }).catch((err) => {
            dispatch({ type: 'LOGIN_ERROR', err});
        })
        
    }
}