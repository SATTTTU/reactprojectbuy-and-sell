import React, { createContext, useReducer } from 'react';

const initialState = { cartItems: [] };

const cartReducer = (state, action) => {
  switch (action.type) {
    case "addtocart":
      return { ...state, cartItems: [...state.cartItems, action.payload] };
    case "removefromcart":
      return { ...state, cartItems: state.cartItems.filter(item => item.id !== action.payload.id) };
    default:
      return state;
  }
};

export const CartContext = createContext(initialState);

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
