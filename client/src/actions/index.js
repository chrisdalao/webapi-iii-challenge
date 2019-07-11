import axios from 'axios';

export const GETALLUSERS_START = "GETALLUSERS_START";
export const GETALLUSERS_SUCCESS = "GETALLUSERS_SUCCESS";
export const GETALLUSERS_FAIL = "GETALLUSERS_FAIL";
export const getAllUsers = () => dispatch => {
    dispatch({ type: GETALLUSERS_START });
    axios
        .get('http://localhost:4040/api/users')
        .then(res => {
            dispatch({
                type: GETALLUSERS_SUCCESS,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch({
                type: GETALLUSERS_FAIL,
                payload: err.response
            })
        })
}

export const GETUSER_BYID_START = "GETUSER_BYID_START";
export const GETUSER_BYID_SUCCESS = "GETUSER_BYID_SUCCESS";
export const GETUSER_BYID_FAIL = "GETUSER_BYID_FAIL";
export const getUser = id => dispatch => {
    dispatch({ type: GETUSER_BYID_START });
    axios
        .get(`http://localhost:4040/api/users/${id}`)
        .then(res => {
            dispatch({
                type: GETUSER_BYID_SUCCESS,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch({
                type: GETUSER_BYID_FAIL,
                payload: err.response
            })
        })
}