import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
// import Web3 from 'web3'

// const web3 = new Web3(Web3.givenProvider || "ws://localhost:8545")

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
