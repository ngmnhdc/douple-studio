import React from 'react'
import { IProduct } from '../utils/interfaces'

import { createContext } from 'react'

const initialState = {
  total: 0,
  products: [],
  addToCart: Function,
  removeFromCart: Function
}

export const CartContext = createContext(initialState)

const cartReducer = (state: any, action: any) => {
  const { type, payload } = action

  switch (type) {
    case 'ADD_TO_CART':
      console.log("ADD TO CART", payload)
      const newItem = action.payload;
      const existItem = state.products.find(
        (item: IProduct) => item.id === newItem.id
      );
      const cartItems = existItem
        ? state.products.map((item: IProduct) =>
          item.name === existItem.name ? newItem : item
        )
        : [...state.products, newItem];
      localStorage.setItem('douple-studio-cart', JSON.stringify(cartItems));
      return { ...state, products: cartItems };
    case 'REMOVE_TO_CART':
      console.log("REMOVE TO CART", payload)
      return { ...state, products: payload.products }
    case 'UPDATE_CART':
      console.log("UPDATE CART", payload)
      return { ...state, total: payload.total }
    default:
      throw new Error(`No case for type ${type} found`)
  }
}

export const CartProvider = ({ children }: any) => {
  const [state, dispatch] = React.useReducer(cartReducer, initialState)

  const addToCart = (product: IProduct) => {
    // updatePrice(updatedCart)

    dispatch({
      type: "ADD_TO_CART",
      payload: product
    })
  }

  const removeFromCart = (product: IProduct) => {
    const updatedCart = state.products.filter(
      (currentProduct: IProduct) => currentProduct.id !== product.id
    )
    // updatePrice(updatedCart)

    dispatch({
      type: "ADD_TO_CART",
      payload: {
        products: updatedCart
      }
    })
  }

  const value = {
    total: state.total,
    products: state.products,
    addToCart,
    removeFromCart
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

const useCartContext = () => {
  const context = React.useContext(CartContext)
  return context
}

export default useCartContext















// export interface ICartDetails {
//   state: Array<IProduct>
//   dispatch: React.Dispatch<ICartDetails>
// }

// export const CartContext = React.createContext(null)

// const initialCart = {
//   cart: [],
// }

// const reducer = (state: any, action: any) => {
//   switch (action.type) {
//     case 'CART_ADD_ITEM': {
//       const newItem = action.payload.item
//       const existItem = state.cart.find((item: IProduct) => item.id === newItem.id)
//       const cartItems = existItem
//         ? state.cart.map((item: IProduct) => item.name === existItem.name ? newItem : item)
//         : [...state.cart, newItem]
//       return { ...state, cart: { ...state, cartItems } }
//     }
//     default: return state
//   }
// }

// export const CartContextProvider = ({ children }: any) => {
//   const [state, dispatch] = React.useReducer(reducer, initialCart)
//   const value = { state, dispatch }
//   return <CartContext.Provider value={val}>{children}</CartContext.Provider>
// }