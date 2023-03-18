import UserService from './user-service';


import {
    REGISTER,
    LOGIN
} from './user-constants';

export const register = (data) => async (dispatch) => {

    try {
        const res = await UserService.register(data);

        dispatch({
            type: REGISTER,
            payload: res.data
        })

        return Promise.resolve(res.data);
    } catch (err) {
        return Promise.reject(err);
    }
}

export const login = (data) => async (dispatch) => {

    try {
        const res = await UserService.login(data);

        dispatch({
            type: LOGIN,
            payload: res.data
        })

    } catch (err) {
        console.log(err);
    }
}

