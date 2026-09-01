import React from 'react'
import { Provider } from 'react-redux'
import './index.css'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

const store = createStore(chat)

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
