import React, { Component } from 'react'
import ListTask from '../tasks/ListTask'

class Dashboard extends Component {
    render(){
        return(
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m12">
                        <ListTask/>
                    </div>
                </div>
            </div>
        )
    }

}

export default Dashboard