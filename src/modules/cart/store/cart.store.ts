import { create } from "zustand";

import type { Product } from "@/modules/shop/shop.types";
import type { CartLine } from "../cart.types";

interface CartState {
  cart: CartLine[];
  addToCart: (product: Product, qty: number, size: string) => void;
  setCart: (cart: CartLine[]) => void;
  clearCart: () => void;
  cartCount: () => number;
}

const cartStore = create<CartState>((set, get) => ({
  cart: [],

  addToCart: (product, qty, size) => {
    const id = `${product.id}-${size}`;
    set((s) => {
      const found = s.cart.find((l) => l.id === id);
      if (found) {
        return {
          cart: s.cart.map((l) =>
            l.id === id ? { ...l, qty: l.qty + qty } : l,
          ),
        };
      }
      return { cart: [...s.cart, { id, product, qty, size }] };
    });
  },

  setCart: (cart) => set({ cart }),
  clearCart: () => set({ cart: [] }),

  cartCount: () => get().cart.reduce((s, l) => s + l.qty, 0),
}));

export default cartStore;
