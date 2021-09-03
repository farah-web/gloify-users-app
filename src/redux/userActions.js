import axios from 'axios';
import {
    FETCH_USERS_REQUEST,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAILURE,
    FETCH_PROFILE_REQUEST,
    FETCH_PROFILE_SUCCESS,
    FETCH_PROFILE_FAILURE,
   }
    from '../redux/userConstants'

export const fetchUsers = () => {
    return (dispatch) => {
        dispatch({
            type: FETCH_USERS_REQUEST,
        });
        axios.get('https://reqres.in/api/users?delay=3')
            .then((response) => {
                const users = response.data.data;
                dispatch({
                    type: FETCH_USERS_SUCCESS,
                    payload: users,
                })
            })
            .catch((error) => {
                const errorMsg = error.message;
                dispatch({
                    type: FETCH_USERS_FAILURE,
                    payload: errorMsg,
                })
            })
    }
}

export const getUserProfile = (id) => {
    return (dispatch) => {
        dispatch({
            type: FETCH_PROFILE_REQUEST,
        });
        axios.get('https://reqres.in/api/users?delay=3')
            .then((response) => {
                const users = response.data.data;
                const userProfile = users.find(user => user.id == id)
                console.log('action of profile>>>', userProfile);
                dispatch({
                    type: FETCH_PROFILE_SUCCESS,
                    payload: userProfile,
                })
            })
            .catch((error) => {
                const errorMsg = error.message;
                dispatch({
                    type: FETCH_PROFILE_FAILURE,
                    payload: errorMsg,
                })
            })
    }
}
