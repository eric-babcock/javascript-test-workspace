import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createStore } from 'redux';
import Counter  from './components/Counter'

function reducer(state,action) {
  console.log('reducer', state, action);
  return state;
}

const store = createStore(reducer);


const App = () => (
  <>
    <Counter/>
  </>
)