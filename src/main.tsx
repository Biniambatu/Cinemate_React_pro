import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Routes } from 'react-router-dom'
import App from './App'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './Store.tsx/Store'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <Routes>
        <App />
      </Routes>
    </Provider>
    
  </React.StrictMode>,
)
