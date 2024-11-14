import React from "react";

const AddMessage = () => {
  let input

  return (
    <section id='new-message'>
      <input
      onKeyPress={(e) => {
        if (e.key === 'Enter') {
          dispatchEvent(input.value, 'Me')
          input.value = ''
        }
      }}
        type="text"
        ref = {(node) => {
          input = node
        }}
      />
    </section>
  )
}