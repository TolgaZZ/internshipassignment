import React from 'react'
import { Link } from 'react-router-dom'

const ListTaskSummary = ({task}) => {
    return(
            <tr>
                <td><p>{task.title}</p></td>
                <td><p>{task.description}</p></td>
                <td><Link to={'/task/' + task.id}>Edit</Link></td>
                <td><Link to={'/task/' + task.id}>Delete</Link></td>
            </tr>
    )
}
export default ListTaskSummary