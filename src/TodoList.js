import React, { useContext } from "react";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";

import Todo from "./Todo";
import { TodosContext } from "./context/todos.context";

const TodoList = () => {
  const { todos } = useContext(TodosContext);
  return (
    <Paper>
      <List>
        {todos.map((todo, i) => (
          <React.Fragment key={todo.id}>
            <Todo {...todo} key={i} />
            <Divider />
          </React.Fragment>
        ))}
      </List>
    </Paper>
  );
};

export default TodoList;
