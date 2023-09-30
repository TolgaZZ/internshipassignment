import React, { Component } from 'react'
import ListTask from '../tasks/ListTask'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

class Dashboard extends Component {
    render(){
        //console.log(this.props);
        //Grabs the task object of the props 
        const { tasks } = this.props;
        return(
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m12">
                        <ListTask tasks={tasks} />
                        <h1>Test</h1>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        tasks: state.firestore.ordered.tasks
    }
}

export default compose(
    connect(mapStateToProps),
    //firestore takes array as parameter
    firestoreConnect([
        { collection: 'tasks' }
    ])
)(Dashboard)