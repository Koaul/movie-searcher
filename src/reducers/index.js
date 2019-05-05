import { handleActions } from 'redux-actions'

const initialState = {}

export default handleActions(
    {
        'searchTitle': (state, action) => ({
            ...state,
            title: action.payload
        }),
        'search': (state, action) => ({
            title: state.title,
            ...action.payload
        }),
        'gotoMovie': (state, action) => ({
            ...state,
            ...action.payload
        })
    },
    initialState
)