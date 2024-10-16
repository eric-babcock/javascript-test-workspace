import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import getPokemon from './components/pokemonCard/getPokemon'
import PokemonCards from './components/pokemonCard/PokemonCards'
import PokemonCard from './components/pokemonCard/PokemonCard'

function App() {

  return (
    <>
      <PokemonCard />
      <div className="card">
        <button onClick={() => getPokemon()}>
          count is
        </button> 
      </div>
    </>
  )
}

export default App
