import { combineReducers } from 'redux'

import reducer from './index'

const rootReducer = combineReducers({
    astroid: reducer
})
export default rootReducer