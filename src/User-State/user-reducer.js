import { REGISTER, LOGIN } from './user-constants';


const initialState = {
    user: {}
}

export default function userReducer(state = initialState, { type, payload }) {

    switch (type) {

        case REGISTER:
            return {...state, user:payload}

        case LOGIN:
            return { ...state, user:payload }

        default:
            return state;
    }
}