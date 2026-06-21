import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { GlobalProvider } from './Context/GlobalVariable.jsx'
import { ThemeProvider } from './Context/Theme.jsx'
import { AlertProvider } from './Context/Alert.jsx'
import { CartProvider } from './Context/Cart.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <CartProvider>
        <AlertProvider>
        <GlobalProvider>
        <App />
      </GlobalProvider>
      </AlertProvider>
      </CartProvider>
    </ThemeProvider>
  </StrictMode>,
)
