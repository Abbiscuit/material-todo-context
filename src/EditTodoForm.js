import React, { useContext } from "react";
import useInputState from "./hooks/useInputState";
import TextField from "@material-ui/core/TextField";
import { TodosContext } from "./context/todos.context";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  form: {
    marginLeft: "1rem",
    width: "100%"
  }
}));

const EditTodoForm = ({ id, task, toggleEditForm }) => {
  const classes = useStyles();
  const { editTodo } = useContext(TodosContext);
  const [value, handleChange, reset] = useInputState(task);

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        editTodo(id, value);
        reset();
        toggleEditForm();
      }}
      className={classes.form}
    >
      <TextField
        margin="normal"
        value={value}
        onChange={handleChange}
        fullWidth
        autoFocus
        required
      />
    </form>
  );
};

export default EditTodoForm;
