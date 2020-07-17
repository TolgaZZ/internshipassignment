import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteTask } from '../../store/actions/taskActions'

class deleteTask extends Component {
    state = {
        title: '',
        description: '',
      
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) =>{
        e.preventDefault();  //avoids the page to reload
        // console.log(this.state)
        this.props.deleteTask(this.state)
    }
    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">You sure that you want to delete the task?</h5>
               
                 
                    <div className="input-field">
                        <button className="btn #304ffe indigo accent-4">Delete Task</button>
                    </div>
                </form>
            </div>
        )
    }
}
//Creates tasks and passes in task
const mapDispatchToProps = (dispatch) => {
    return {
        deleteTask: (task) => dispatch(deleteTask(task))
    }
} 

export default connect(null, mapDispatchToProps)(deleteTask)
