import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { ProductProvider } from './contexts/ProductContext.jsx'
import { SlideBarProvider } from './contexts/SlideBarContext.jsx'
import { CartProvider } from './contexts/CartContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ProductProvider>
      <SlideBarProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </SlideBarProvider>
    </ProductProvider>
  </BrowserRouter>
  ,
)
