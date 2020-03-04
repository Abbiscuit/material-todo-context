import React from "react";
import TodoApp from "./TodoApp";
import { CssBaseline } from "@material-ui/core";

const App = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <TodoApp />
    </React.Fragment>
  );
};

export default App;
