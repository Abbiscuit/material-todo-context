import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default initialTodos => {
  const [todos, setTodos] = useState(initialTodos);

  return {
    todos,
    addTodo: newTodoText => {
      setTodos([
        ...todos,
        { id: uuidv4(), task: newTodoText, completed: false }
      ]);
    },
    removeTodo: todoId => {
      // filter out removed todo
      const updatedTodos = todos.filter(todo => todo.id !== todoId);
      // call setTodos with new todos array
      setTodos(updatedTodos);
    },
    toggleTodo: todoId => {
      console.log("todoId", todoId);
      const updatedTodos = todos.map(todo => {
        console.log(todo.id === todoId);
        return todo.id === todoId
          ? { ...todo, completed: !todo.completed }
          : todo;
      });

      setTodos(updatedTodos);
    },
    editTodo: (todoId, newTask) => {
      const updatedTodos = todos.map(todo => {
        return todo.id === todoId ? { ...todo, task: newTask } : todo;
      });

      setTodos(updatedTodos);
    }
  };
};