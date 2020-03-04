import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";

import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

const TodoApp = () => {
  const initialTodos = [
    { id: 1, task: "Clean Fishtank", completed: false },
    { id: 2, task: "Wash Car", completed: true },
    { id: 3, task: "Grow Beard", completed: false }
  ];
  const [todos, setTodos] = useState(initialTodos);

  const addTodo = newTodoText => {
    setTodos([...todos, { id: uuidv4(), task: newTodoText, completed: false }]);
  };

  const removeTodo = todoId => {
    // filter out removed todo
    const updatedTodos = todos.filter(todo => todo.id !== todoId);
    // call setTodos with new todos array
    setTodos(updatedTodos);
  };

  const toggleTodo = todoId => {
    console.log("todoId", todoId);
    const updatedTodos = todos.map(todo => {
      console.log(todo.id === todoId);
      return todo.id === todoId
        ? { ...todo, completed: !todo.completed }
        : todo;
    });

    setTodos(updatedTodos);
  };

  const editTodo = (todoId, newTask) => {
    const updatedTodos = todos.map(todo => {
      return todo.id === todoId ? { ...todo, task: newTask } : todo;
    });

    setTodos(updatedTodos);
  };

  return (
    <Paper
      style={{
        margin: 0,
        height: "100vh",
        padding: 0,
        backgroundColor: "#eee"
      }}
      elevation={0}
    >
      <AppBar
        color="primary"
        position="static"
        style={{
          height: "64px"
        }}
      >
        <Toolbar>
          <Typography color="inherit">TODOS WITH HOOKS</Typography>
        </Toolbar>
      </AppBar>
      <Grid
        container
        justify="center"
        style={{
          marginTop: "1rem"
        }}
      >
        <Grid item xs={11} md={8} lg={4}>
          <TodoForm addTodo={addTodo} />
          <TodoList
            todos={todos}
            removeTodo={removeTodo}
            toggleTodo={toggleTodo}
            editTodo={editTodo}
          />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default TodoApp;
