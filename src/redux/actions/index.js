import {UPDATE_VALUE, SAVE_TODO} from "./actionTypes";

//regresan type (nombre funcion) y payload (informacion para modificar/procesar)

export const update_value =  value => {
    return {
        type: UPDATE_VALUE,
        payload: value
    };
};

//saveTodo no recibe argumentos, siempre hay que poner payload aunque sea null
export const saveTodo = () => {
    return {
        type: SAVE_TODO,
        payload: null
    };
};