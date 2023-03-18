import { Toast } from 'bootstrap';
import React from 'react';


import {
    GET_BIRDS,
    CREATE_BIRD,
    UPDATE_BIRD,
    DELETE_BIRD
} from './birds-constants';

import BirdsService from './birds-service';

export const getAllBirds = () => async (dispatch) => {
    try {
        const res = await BirdsService.getAll();
        

        dispatch({
            type: GET_BIRDS,
            payload: res.data
        })
    } catch (err) {
        console.log(err) 
       
    }
}

export const createBird = (data) => async (dispatch) => {
    try {
        const res = await BirdsService.create(data);
        console.log(res.data);

        dispatch({
            type: CREATE_BIRD,
            payload: res.data
        })


        return Promise.resolve(res.data);
    } catch (err) {
        return Promise.reject(err);
    }
}

export const updateBird = (data) => async (dispatch) => {
    try {
        const res = await BirdsService.update(data);

        dispatch({
            type: UPDATE_BIRD,
            payload: res.data
        })
    } catch (err) {
        console.log(err);
    }
}

export const deleteBird = (id) => async (dispatch) => {
    try {
        await BirdsService.remove(id);

        dispatch({
            type: DELETE_BIRD,
            payload: id
        })
    

    }catch (err) {
        console.log(err);
}
}



