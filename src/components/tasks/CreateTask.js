import React, { Component } from 'react'

class CreateTask extends Component {
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
        console.log(this.state)
    }
    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Sign in</h5>
                    <div className="input-field">
                        <label htmlFor="title">Task Title</label>
                        <input type="text" id="title" onChange={this.handleChange}></input>
                    </div>
                    <div className="input-field">
                        <label htmlFor="description">Description</label>
                        <textarea id="description" className="materialize-textarea" onChange={this.handleChange}></textarea>
                    </div>
                 
                    <div className="input-field">
                        <button className="btn #304ffe indigo accent-4">Create Task</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default CreateTask
