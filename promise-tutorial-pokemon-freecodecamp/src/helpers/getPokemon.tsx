import getPromise from "./getPromise";

const POKEMONS_URL = 'https://pokeapi.co/api/v2/pokemon?limit=50';
const POKEMONS_BAD_URL = 'https://pokeapi.co/api/v2/pokemon-bad';

// We have discussed this funciton already!

let promise = getPromise(POKEMONS_URL);

const getPokemon = () => {
  promise.then(
    (result) => {
      console.log({result}); // Log the result of 50 Pokemons
    },
    (error) => {
      // As the URL is a valid one, this will not be called. 
      console.log('We have encountered an Error!'); // Log an error
    }
  );
}

export default getPokemon;