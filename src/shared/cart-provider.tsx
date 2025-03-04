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
  | { type: "INITIALIZE_CART"; payload: CartItem[] }
  | { type: "ADD_ONE_ITEM"; payload: CartItem }
  | { type: "REMOVE_ONE_ITEM"; payload: string }
  | { type: "REMOVE_ITEM"; payload: string }
  | { type: "CLEAR_CART" };

const initialState: CartState = {
  items: [],
};

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case "INITIALIZE_CART":
      return { items: action.payload };

    case "ADD_ONE_ITEM": {
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

    case "REMOVE_ONE_ITEM": {
      const existingItem = state.items.find((item) => item.id === action.payload);
      let updatedItems;

      if (existingItem) {
        updatedItems = state.items
          .map((item) =>
            item.id === action.payload ? { ...item, quantity: item.quantity - 1 } : item,
          )
          .filter((item) => item.quantity > 0);
      } else {
        updatedItems = state.items;
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
  addOneItem: (item: CartItem) => void;
  removeOneItem: (id: string) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
} | null>(null);

const CartProvider = ({ children }: { children: React.ReactNode }) => {
  "use client";
  const [state, dispatch] = useReducer(cartReducer, initialState);

  // Load cart from localStorage
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      dispatch({ type: "INITIALIZE_CART", payload: JSON.parse(storedCart).items });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state));
  }, [state]);

  const addOneItem = (item: CartItem) => dispatch({ type: "ADD_ONE_ITEM", payload: item });
  const removeOneItem = (id: string) => dispatch({ type: "REMOVE_ONE_ITEM", payload: id });
  const removeItem = (id: string) => dispatch({ type: "REMOVE_ITEM", payload: id });
  const clearCart = () => dispatch({ type: "CLEAR_CART" });

  return (
    <CartContext.Provider value={{ state, addOneItem, removeOneItem, removeItem, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
