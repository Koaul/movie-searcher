import { handleActions } from 'redux-actions'

const initialState = {}

export default handleActions(
    {
        'search': (state, action) => ({
            ...action.payload
        }),
        'gotoMovie': (state, action) => ({
            ...action.payload
        })
    },
    initialState
)