import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import io from 'socket.io-client';
const socket= io('http://localhost:8888')





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 
      <App />

  </React.StrictMode>,
)
