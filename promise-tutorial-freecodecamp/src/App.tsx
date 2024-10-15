import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import queryPizza from './helpers/queryPizza'

function App() {

  return (
    <>
      <div className="card">
        <button onClick={() => queryPizza()}>
          order a pizza {}
        </button>
      </div>
    </>
  )
}

export default App
