import {
    FETCH_USERS_REQUEST,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAILURE,
    FETCH_PROFILE_REQUEST,
    FETCH_PROFILE_SUCCESS,
    FETCH_PROFILE_FAILURE,
}
    from '../redux/userConstants'

export const userReducer = (state = { users: [], loading: false, error: '' }, action) => {
    switch (action.type) {
        case FETCH_USERS_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case FETCH_USERS_SUCCESS:
            return {
                loading: false,
                users: action.payload,
                error: '',
            }

        case FETCH_USERS_FAILURE:
            return {
                loading: false,
                users: [],
                error: action.payload,
            }

        default: return state;
    }
}

export const userProfileReducer = (state = { users: [], loading: false, error: '' }, action) => {
    switch (action.type) {
        case FETCH_PROFILE_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case FETCH_PROFILE_SUCCESS:
            return {
                loading: false,
                users: action.payload,
                error: '',
            }

        case FETCH_PROFILE_FAILURE:
            return {
                loading: false,
                users: [],
                error: action.payload,
            }

        default: return state;
    }
}

