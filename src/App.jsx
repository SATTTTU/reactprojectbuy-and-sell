import React from 'react'
import Header from './Component/Header'
import CartProvider from './Component/CartContext'
import Footer from './Component/Footer'


function App() {
  return (
    <>
    <CartProvider>
    <Header/>
    <Footer/>
 
    </CartProvider>
    
    
    </>
  )
}

export default App