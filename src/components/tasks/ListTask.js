import React from 'react'
import ListTaskSummary from './ListTaskSummary'

const ListTask = () => {
    return (
        <div className="list-task section">
            <table className="highlight #e3f2fd blue lighten-5">
                <thead>
                    <tr>
                        <th>Task</th>
                        <th>Description</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    <ListTaskSummary/>
                    <ListTaskSummary/>
                    <ListTaskSummary/>
                    <ListTaskSummary/>
                    <ListTaskSummary/>
                    <ListTaskSummary/>
                </tbody>
            </table>
        </div>
    )
}

export default ListTask

/* <a class="waves-effect waves-light btn-small #304ffe indigo accent-4">Edit</a>
<a class="waves-effect waves-light btn-small #304ffe indigo accent-4">Delete</a> */