import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

function DescriptionTask(props) {
    const { task } = props;
    if (task) {
        return (
        <div className="container section description-task">
            <div className="card">
                <div className="card-content">
                    <span className="card-title">{ task.title }</span>
                    <p>{ task.description }</p>
                </div>
            </div>
        </div>
       )} else {
        return (
            <div className="container center">
                <p>Loading task...</p>
            </div>    
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    // console.log(state)
    const id = ownProps.match.params.id
    const tasks = state.firestore.data.tasks;
    const task = tasks ? tasks[id] : null
    return {
        task: task
    }
}
export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'tasks' }
    ]),
)(DescriptionTask)
