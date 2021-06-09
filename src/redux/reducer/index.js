import { FAILURE, GET_REQ, SUCCESS } from '../action/types'

const initialState = {
    loading: false,
    astroid: [],
    error: "",
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_REQ:
            return { ...state, loading: true }
        case SUCCESS:
            return { loading: false, astroid: action.payload, error: '' }
        case FAILURE:
            return { loading: false, astroid: [], error: action.payload }


        default:
            return state;
    }
}
export default reducer