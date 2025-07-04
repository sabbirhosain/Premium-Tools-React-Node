import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import ContextProvider from './Context/ContextProvider.jsx'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ContextProvider>
      <App />
    </ContextProvider>
  </BrowserRouter>
)
