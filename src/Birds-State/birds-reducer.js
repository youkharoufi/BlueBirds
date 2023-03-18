import { CREATE_BIRD, UPDATE_BIRD, GET_BIRDS, DELETE_BIRD } from "./birds-constants";


const initialState = {
    birds:[]
}


export default function birdsReducer(state = initialState, { type, payload }) {

    switch (type) {

        case GET_BIRDS:
            
            return { ...state, birds: payload};

        case CREATE_BIRD:
            return { ...state, birds: [...state.birds, payload] };

        case UPDATE_BIRD:
            return { ...state, birds: [...state.birds.filter(bird => bird.id !== payload.id), payload] };

        case DELETE_BIRD:
            return { ...state, birds: [...state.birds.filter(bird => bird.id !== payload)] };

        default:
            return state;
    }

}