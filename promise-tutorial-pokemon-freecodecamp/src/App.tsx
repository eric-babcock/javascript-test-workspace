import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import getPokemon from './helpers/getPokemon'

function App() {

  return (
    <>
      <div className="card">
        <button onClick={() => getPokemon()}>
          count is
        </button> 
      </div>
    </>
  )
}

export default App
