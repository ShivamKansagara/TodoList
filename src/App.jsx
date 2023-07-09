import React, { useEffect, useState } from "react";
import "./style.css";
import Todoform from "./components/todoform";
import Todolist from "./components/Todolist";
function App() {
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS");
    if (localValue == null) return [];
    return JSON.parse(localValue);
  });

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos));
  }, [todos]);

  function addtodo(title) {
    setTodos((currenTodos) => {
      return [
        ...currenTodos,
        { id: crypto.randomUUID(), title, complete: false },
      ];
    });
  }

  const toggletodo = (id, completed) => {
    setTodos((currenTodos) => {
      return currenTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }
        return todo;
      });
    });
  };
  const deletetodo = (id) => {
    setTodos((currenTodos) => {
      return currenTodos.filter((todo) => todo.id !== id);
    });
  };
  return (
    <>
      <Todoform addtodo={addtodo}></Todoform>

      <h1 className="header">Todo List</h1>

      <Todolist
        todos={todos}
        toggletodo={toggletodo}
        deletetodo={deletetodo}
      ></Todolist>
    </>
  );
}

export default App;
