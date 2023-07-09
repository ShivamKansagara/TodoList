import React from "react";
import Todoitem from "./Todoitem";
export default function Todolist({ todos, deletetodo, toggletodo }) {
  return (
    <div>
      <ul className="list">
        {todos.length === 0 && "No Todo List"}
        {todos.map((todo) => {
          return (
            <Todoitem
              id={todo.id}
              completed={todo.completed}
              title={todo.title}
              key={todo.id}
              toggletodo={toggletodo}
              deletetodo={deletetodo}
            />
          );
        })}
      </ul>
    </div>
  );
}
