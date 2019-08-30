import {UPDATE_VALUE} from "./actionTypes";

//regresan type (nombre funcion) y payload (informacion para modificar/procesar)

export const update_value =  value => {
    return {
        type: UPDATE_VALUE,
        payload: value
    };
};