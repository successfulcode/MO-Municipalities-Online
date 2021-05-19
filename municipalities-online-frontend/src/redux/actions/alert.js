import { v4 as uuidv4 } from 'uuid';

import { SET_ALERT, REMOVE_ALERT } from './types';

export const setAlert = (title = 'Error', msg, alertType='danger', timeout = 5000) => dispatch =>{
    const id = uuidv4();

    dispatch({
        type: SET_ALERT,
        payload: {title, msg, alertType, timeout, id}
    });

    setTimeout(()=> dispatch({type: REMOVE_ALERT, payload: id}), timeout)
};

export const deleteAlert = (id) => dispatch => {
    dispatch({type: REMOVE_ALERT, payload: id})
}