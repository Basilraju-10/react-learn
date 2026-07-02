import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import CountContext from './context/CountContext.js'
import CountProvider from './providers/CountProvider.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
       <CountProvider>
        <App />
       </CountProvider>
    
  </StrictMode>,
)
