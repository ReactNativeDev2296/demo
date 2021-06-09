import { FAILURE, GET_REQ, SUCCESS } from './types';
import Axios from 'axios'
export const get_api = () => {
    return {
        type: GET_REQ
    }
}

export const api_success = astroid => {
    return {
        type: SUCCESS,
        payload: astroid
    }
}

export const api_failure = (error) => {
    return {
        type: FAILURE,
        payload: error
    }
}


export const fetchastroid = () => {
    return (dispatch) => {
        console.log('1')
        dispatch(get_api())
        console.log('2')
        Axios.get('https://api.nasa.gov/neo/rest/v1/neo/browse?page=0&size=1&api_key=5nY54qVqglHJnJg8URYrdX31qe0dCG0GczbTlwMK')
            .then((res) => {
                const astroid = res.data
                dispatch(api_success(astroid))

            }).catch((error) => {
                const errorMsg = error.message
                dispatch(api_failure(errorMsg))
            })
    }
}