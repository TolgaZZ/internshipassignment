import React, { Component } from 'react'
import ListTask from '../tasks/ListTask'
import { connect } from 'react-redux'


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
                    </div>
                </div>
            </div>
        )
    }

}


const mapStateToProps = (state) => {
    return {
        tasks: state.task.tasks
    }
}

export default connect(mapStateToProps)(Dashboard)