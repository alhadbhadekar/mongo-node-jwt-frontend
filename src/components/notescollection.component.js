import React from 'react'

const NotesCollection = ({ notes }) => {
    return (
        <React.Fragment>
            <table className="table table-hover">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">Title</th>
                        <th scope="col">Content</th>
                        <th scope="col">Description</th>
                        <th scope="col">Category</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        notes.map(item =>(
                            <tr key={item._id}>
                                <td>{item.title}</td>
                                <td>{item.content}</td>
                                <td>{item.description}</td>
                                <td>{item.category}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </React.Fragment>
    )
}

export default NotesCollection
