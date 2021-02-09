import * as constants from './../constants'

export default function notesReducer(state=[], action) {
    switch(action.type){
        case constants.SET_ALL_NOTES:
            return action.payload
        case constants.ADD_NOTE:
            return state.concat(action.payload)
        case constants.REMOVE_NOTE:
            return state.filter(item => item._id !== action.payload)
        case constants.UPDATE_NOTE:
            return state.map(item => {
                if(item._id === action.payload)
                    return { ...item, ...action.payload }
                else
                    return item
            })
        case constants.RESET_USER_INFO:
            return []
        default:
            return state
    }
}