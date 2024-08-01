import React, { useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const initialState = [
  {id: 1, message: 'wallk the dog'},
  {id: 2, message: 'take out trash'},
  {id: 3, message: 'finish tutorial video'}
]

function Todos() {
  const [todoList, setTodoList] = useState(initialState);
  console.log('app.js',todoList)
  return(
    <>
      <TodoForm
      todos = {todoList}
      setTodos = {setTodoList}/>
      <TodoList todos={todoList}/>
    </>
  )
} 

export default Todos;