"use client";

import { ReactNode, createContext, useContext, useMemo, useState } from "react";

export interface IProduct {
  id: string;
  name: string;
  imageUrl: string;
  price: string;
  numberPrice: number;
  description: string | null;
  defaultPriceId: string;
}

type CartContextData = {
  cartItems: IProduct[];
  cartTotalPrice: number;
  addToCart: (product: IProduct) => void;
  checkIfTheProductAlreadyExist: (prodId: IProduct["id"]) => boolean;
  removeCartItem: (prodId: IProduct["id"]) => void;
};

const CartContext = createContext({} as CartContextData);

type CartContextProviderProps = {
  children: ReactNode;
};
export const CartContextProvider = ({ children }: CartContextProviderProps) => {
  const [cartItems, setCartItems] = useState<IProduct[]>([]);
  console.log("cartItems", cartItems);

  const cartTotalPrice = useMemo(() => {
    return cartItems.length
      ? cartItems.reduce((acc, product) => (acc += product.numberPrice), 0)
      : 0;
  }, [cartItems]);

  const addToCart = (product: IProduct) => {
    setCartItems((prev) => [...prev, product]);
  };
  const checkIfTheProductAlreadyExist = (prodId: IProduct["id"]) => {
    return cartItems.some((product) => product.id === prodId);
  };
  const removeCartItem = (prodId: IProduct["id"]) => {
    setCartItems(cartItems.filter((product) => product.id !== prodId));
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartTotalPrice,
        addToCart,
        checkIfTheProductAlreadyExist,
        removeCartItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
