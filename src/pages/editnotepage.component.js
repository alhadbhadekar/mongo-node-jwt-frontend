import React, { useState } from 'react'
import { connect } from 'react-redux'
import { toast } from 'react-toastify'

import { createNote } from './../redux/actions/notesActionCreators'

const EditNotePage = ({ history, dispatchCreateNoteAction }) => {
    
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [description, setDescription] = useState('')
    const [category, setCategory] = useState('')
    
    const handleOnSubmit = event => {
        event.preventDefault()
        const data = { title, content, description, category }
        dispatchCreateNoteAction(data,
            () => {
                toast.success('Note created successfully!')
                history.replace('/notes')
            },
            (message) => toast.error(`Error: ${message}`))
    }

    return (
        <React.Fragment>
            <div className='row'>
                <div className="col">
                    <h2>Edit Note</h2>
                </div>
            </div>
            <div className="row align-items-center mt-4">
                <div className="col-9">
                    <form noValidate onSubmit={handleOnSubmit}>
                        <div className="form-group">
                            <label htmlFor='title'>Title</label>
                            <input noValidate id="title" 
                                type="text"
                                placeholder="Title"
                                name="title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                className="form-control"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor='content'>Content</label>
                            <input noValidate id="content" 
                                type="text"
                                placeholder="Content"
                                name="content"
                                value={content}
                                onChange={(e) => setContent(e.target.value)}
                                className="form-control"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor='description'>Description</label>
                            <input noValidate id="content" 
                                type="text"
                                placeholder="Description"
                                name="description"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                className="form-control"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor='category'>Category</label>
                            <select noValidate id="category"
                                name="category"
                                className="form-control"
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}>
                                    <option value="">-- Select --</option>
                                    <option value='GENERAL'>GENERAL</option>
                                    <option value='IDPROOF'>ID Proof</option>
                                    <option value='PROFESSIONAL'>Professional</option>
                            </select>
                        </div>
                        <div className="mt-5">
                            <button type="submit" className="btn btn-primary mr-2 btn-lg">
                                Save | <i className="fas fa-save"></i>
                            </button>
                            <button type="button" 
                                onClick={() => history.replace("/notes")}
                                className="btn btn-secondary btn-lg">
                                Cancel | <i className="fas fa-times"></i>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </React.Fragment>
    )
}

const mapDispatchToProps = dispatch => ({
    dispatchCreateNoteAction: (data, onSuccess, onError) => 
        dispatch(createNote(data, onSuccess, onError))
})

export default connect(null, mapDispatchToProps)(EditNotePage)