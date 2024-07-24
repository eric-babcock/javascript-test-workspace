import React from "react";
import Todo from "./Todo";

const todos = [
  {id: 1, message: 'wallk the dog'},
  {id: 2, message: 'take out trash'},
  {id: 3, message: 'finish tutorial video'}
]

function TodoList() {
  return (
    <>
      {todos.map( todo => {
        return <Todo key={todo.id} todo={todo}/>
      })}
    </>
  )
}

export default TodoList;