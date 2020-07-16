import React from 'react'

const ListTaskSummary = ({task}) => {
    return(
            <tr>
                <td><p>{task.title}</p></td>
                <td><p>1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p></td>
                <td>Edit</td>
                <td>Delete</td>
            </tr>
    )
}

export default ListTaskSummary