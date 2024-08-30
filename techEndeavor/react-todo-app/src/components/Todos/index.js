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
  const handleDelete = id => {
    const newTodos = todoList.filter(item => {
      // return all items (item) in todoList that were'nt marked for deletion
      return item.id !== id
    })
    setTodoList(newTodos);
  }
  const handleUpdate = () => {
    //update logic
  }

  return(
    <>
      <TodoForm
        todos={todoList}
        setTodos={setTodoList}
      />
      <TodoList
        todos={todoList}
        onDelete={handleDelete}
        onUpdate={handleUpdate}
      />
    </>
  )
} 

export default Todos;