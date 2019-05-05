import { handleActions } from 'redux-actions'

const initialState = {}

export default handleActions(
    {
        'search': (state, action) => ({
            ...state,
            ...action.payload
        }),
        'gotoMovie': (state, action) => ({
            ...state,
            ...action.payload
        }),
        'setData': (state, action) => ({
                ...state,
                page: action.payload.page,
                title: action.payload.title
        })
    },
    initialState
)