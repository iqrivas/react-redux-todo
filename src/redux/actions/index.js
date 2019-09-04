import {UPDATE_VALUE, SAVE_TODO, DELETE_TODO, TOGGLE_COMPLETED} from "./actionTypes";

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

export const deleteTodo = index => {
    return {
        type: DELETE_TODO,
        payload: index
    };
};

export const toggleCompleted = index => {
    return {
        type: TOGGLE_COMPLETED,
        payload: index
    };
};