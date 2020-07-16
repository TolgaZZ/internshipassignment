import React from 'react'
import { Link } from 'react-router-dom'

const ListTaskSummary = ({task}) => {
    return(
            <tr>
                <td><p>{task.title}</p></td>
                <td><p>1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p></td>
                <td><Link to={'/task/' + task.id}>Edit</Link></td>
                <td><Link to={'/task/' + task.id}>Delete</Link></td>
            </tr>
    )
}
export default ListTaskSummary