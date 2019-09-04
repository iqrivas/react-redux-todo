import React from "react";
import TextField from "@material-ui/core/TextField";
import * as actions from "./redux/actions";
import { connect } from "react-redux";

const TodoForm = ({value, saveTodo, update_value}) => (
    <form 
        onSubmit={event => {
        event.preventDefault();
        saveTodo();
      }}
    >
        <TextField 
            type="text" 
            placeholder="Add todo..." 
            margin="normal" 
            value={value} 
            //
            onChange={ e => update_value(e.target.value)}
         />
    </form>
);

const mapStateToProps = ({ todoReducer}) => {
    const { value } = todoReducer;
    return { value };
};

export default connect(mapStateToProps, actions)(TodoForm)
//connect le va a pasar los props a TodoForm
//mapStateToProps: 