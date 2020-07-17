import React from 'react'
import ListTaskSummary from './ListTaskSummary'

const ListTask = ({tasks}) => {
    return (
        <div className="list-task section">
            <table className="highlight bordered ">
                <thead>
                    <tr>
                        <th>Task</th>
                        <th>Description</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    { tasks && tasks.map(task => {
                        return (
                            <ListTaskSummary task={task} key={task.id}></ListTaskSummary>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}
export default ListTask
