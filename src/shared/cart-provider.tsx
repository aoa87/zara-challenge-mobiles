"use client";

import { createContext, useReducer, useEffect } from "react";

export type CartItem = {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  price: number;
  quantity: number;
};

type CartState = {
  items: CartItem[];
};

type CartAction =
  | { type: "ADD_ITEM"; payload: CartItem }
  | { type: "REMOVE_ITEM"; payload: string }
  | { type: "CLEAR_CART" };

const initialState: CartState = {
  items: [],
};

// Load cart from localStorage
const loadCartFromStorage = (): CartState => {
  if (typeof window !== "undefined") {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : initialState;
  }
  return initialState;
};

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case "ADD_ITEM": {
      const existingItem = state.items.find((item) => item.id === action.payload.id);
      let updatedItems;

      if (existingItem) {
        updatedItems = state.items.map((item) =>
          item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item,
        );
      } else {
        updatedItems = [...state.items, { ...action.payload, quantity: 1 }];
      }

      localStorage.setItem("cart", JSON.stringify({ items: updatedItems }));
      return { items: updatedItems };
    }

    case "REMOVE_ITEM": {
      const updatedItems = state.items.filter((item) => item.id !== action.payload);
      localStorage.setItem("cart", JSON.stringify({ items: updatedItems }));
      return { items: updatedItems };
    }

    case "CLEAR_CART":
      localStorage.removeItem("cart");
      return { items: [] };

    default:
      return state;
  }
};

export const CartContext = createContext<{
  state: CartState;
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
} | null>(null);

const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState, loadCartFromStorage);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state));
  }, [state]);

  const addItem = (item: CartItem) => dispatch({ type: "ADD_ITEM", payload: item });
  const removeItem = (id: string) => dispatch({ type: "REMOVE_ITEM", payload: id });
  const clearCart = () => dispatch({ type: "CLEAR_CART" });

  return (
    <CartContext.Provider value={{ state, addItem, removeItem, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
