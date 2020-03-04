import React from "react";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";

import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import { TodosProvider } from "./context/todos.context";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  paper: {
    margin: 0,
    height: "100vh",
    padding: 0,
    backgroundColor: "#eeee"
  },
  appbar: {
    height: "64px"
  },
  grid: {
    marginTop: "1rem"
  }
}));

const TodoApp = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.paper} elevation={0}>
      <AppBar color="primary" position="static" className={classes.appbar}>
        <Toolbar>
          <Typography color="inherit">TODOS WITH HOOKS</Typography>
        </Toolbar>
      </AppBar>
      <Grid container justify="center" className={classes.grid}>
        <Grid item xs={11} md={8} lg={4}>
          <TodosProvider>
            <TodoForm />
            <TodoList />
          </TodosProvider>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default TodoApp;
