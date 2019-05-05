import { handleActions } from 'redux-actions'

const initialState = {isLoading: false}

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
        }),
        'isLoading': (state, action) => ({
            ...state,
            isLoading: action.payload
        })
    },
    initialState
)