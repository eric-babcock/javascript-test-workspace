import React from "react";
import Todo from "./Todo";

function TodoList({ todos, onDelete, onUpdate }) {
  return (
    <>
      {todos.map( todo => {
        return (
          <Todo
            key={todo.id}
            todo={todo}
            onDelete={onDelete}
            onUpdate={onUpdate}
          />)
      })}
    </>
  )
}

export default TodoList;