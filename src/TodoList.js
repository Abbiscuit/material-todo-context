import React from "react";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";

import Todo from "./Todo";

const TodoList = ({ todos, removeTodo, toggleTodo, editTodo }) => {
  return (
    <Paper>
      <List>
        {todos.map((todo, i) => (
          <React.Fragment key={todo.id}>
            <Todo
              id={todo.id}
              task={todo.task}
              completed={todo.completed}
              removeTodo={removeTodo}
              toggleTodo={toggleTodo}
              editTodo={editTodo}
            />
            <Divider />
          </React.Fragment>
        ))}
      </List>
    </Paper>
  );
};

export default TodoList;
