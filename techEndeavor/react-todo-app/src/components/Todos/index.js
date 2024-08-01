import React from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const todos = [
  {id: 1, message: 'wallk the dog'},
  {id: 2, message: 'take out trash'},
  {id: 3, message: 'finish tutorial video'}
]

function Todos() {
  return(
    <>
      <TodoForm />
      <TodoList />
    </>
  )
} 

export default Todos;