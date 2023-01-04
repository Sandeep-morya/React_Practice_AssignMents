import React from "react";
import TodoInput from "./Components/TodoInput";
import TodoList from "./Components/TodoList";

const App = () => {
  return (
    <div className="app">
      <TodoInput />
      <TodoList />
    </div>
  );
};

export default App;
