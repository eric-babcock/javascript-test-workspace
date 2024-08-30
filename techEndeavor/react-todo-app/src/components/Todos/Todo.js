import React from 'react'

function Todo({ todo, onDelete, onUpdate }) {
  return (
    <div>
      {todo.message}
      <button onClick={() => onUpdate()}>Edit</button>
      <button onClick={() => onDelete(todo.id)}>X</button>
    </div>
  )
}

export default Todo;