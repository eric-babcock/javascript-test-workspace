import React, { useState } from 'react';

function TodoForm() {

  const [todo, setTodo] = useState({
    message: ''
  });

  const handleChange = e => {
    setTodo({ message: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault();
    console.log(todo)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
      type="text"
      name='todo'
      value={todo.message}
      placeholder='Enter your todo item'
      onChange={handleChange}
      />
      <button
        type='submit'
        
      >
        Add Todo
      </button>
    </form>
  )
}

export default TodoForm;