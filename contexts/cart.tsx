import React, { SetStateAction } from "react";
import { ICartItem } from '../utils/interfaces'

export interface ICartDetails {
  totalPrice: number;
  setTotalPrice: React.Dispatch<SetStateAction<number>>;
  numberOfCartItem: number;
  setNumberOfCartItem: React.Dispatch<SetStateAction<number>>;
  cartItems: Array<ICartItem>;
  setCartItems: React.Dispatch<SetStateAction<Array<ICartItem>>>;
}

export const CartContext = React.createContext<ICartDetails | null>(null);