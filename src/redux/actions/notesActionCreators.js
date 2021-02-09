import * as constants from './../constants'

export const fetchAllNotes = () => ({
    type: constants.API,
    payload:{
        method: 'GET',
        url: '/api/notes',
        success: (response) => (setAllNotes(response))
    }
})

export const createNote = (data, onSuccess, onError) => ({
    type: constants.API,
    payload:{
        method: 'POST',
        url: '/api/notes',
        data,
        success: (note) => (addNote(note)),
        postProcessSuccess: onSuccess,
        postProcessError: onError
    }
})

const addNote = (note) => ({
    type: constants.ADD_NOTE,
    payload: note
})

const setAllNotes = (data) => ({
    type: constants.SET_ALL_NOTES,
    payload: data
})

