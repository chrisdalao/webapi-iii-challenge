import {
    GETALLUSERS_START,
    GETALLUSERS_SUCCESS,
    GETALLUSERS_FAIL,
    GETUSER_BYID_START,
    GETUSER_BYID_SUCCESS,
    GETUSER_BYID_FAIL
} from '../actions';

const initialState = {
    users: [],
    user: "",
    error: ""
}

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case GETALLUSERS_START:
            return {
                ...state,
                error: "",
            }
        case GETALLUSERS_SUCCESS:
            return {
                ...state,
                users: action.payload
            }
        case GETALLUSERS_FAIL:
            return {
                ...state,
                error: action.payload
            }
        case GETUSER_BYID_START:
            return {
                ...state,
                error: ""
            }
        case GETUSER_BYID_SUCCESS:
            return {
                ...state,
                user: action.payload
            }
        case GETUSER_BYID_FAIL:
            return {
                ...state,
                error: action.payload
            }

        default:
            return state;
    }
}