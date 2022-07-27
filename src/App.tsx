import React, { FC } from "react";
import { TodoList } from "./components/TodoList/TodoList";
import { TodoForm } from "./components/TodoForm/TodoForm";
import { GlobalStyles } from "./GlobalStyles";

const App: FC = () => {
  return (
    <>
      <GlobalStyles />
      <TodoForm />
      <TodoList />
    </>
  );
};

export default App;
