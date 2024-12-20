import React from 'react'
import Header from './Component/Header'
import CartProvider from './Component/CartContext'
import Footer from './Component/Footer'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';



function App() {
  return (
    <>
    <CartProvider>
    <Header/>
    <Footer/>
 <ToastContainer/>
    </CartProvider>
   
    
    
    </>
  )
}

export default App