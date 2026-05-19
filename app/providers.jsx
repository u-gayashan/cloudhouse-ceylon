"use client";

import React from "react";
import { useTweaks } from "@/components/tweaks-panel";

const TWEAK_DEFAULTS = {
  palette: "forest",
  typography: "editorial",
  hero: "editorial",
  shopUnlocked: false,
  audienceCurrent: 1840,
  audienceTarget: 5000,
  dark: false,
  density: "regular",
};

const TweaksCtx = React.createContext(null);
const CartCtx = React.createContext(null);

export function Providers({ children }) {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [cart, setCart] = React.useState([]);

  React.useEffect(() => {
    const r = document.documentElement;
    r.setAttribute("data-palette", t.palette);
    r.setAttribute("data-typography", t.typography);
    r.setAttribute("data-hero", t.hero);
    r.setAttribute("data-theme", t.dark ? "dark" : "light");
    r.setAttribute("data-density", t.density);
  }, [t.palette, t.typography, t.hero, t.dark, t.density]);

  const addToCart = React.useCallback((product, qty, size) => {
    const id = `${product.id}-${size}`;
    setCart((prev) => {
      const found = prev.find((l) => l.id === id);
      if (found)
        return prev.map((l) =>
          l.id === id ? { ...l, qty: l.qty + qty } : l
        );
      return [...prev, { id, product, qty, size }];
    });
  }, []);

  const cartCount = cart.reduce((s, l) => s + l.qty, 0);

  return (
    <TweaksCtx.Provider value={{ t, setTweak }}>
      <CartCtx.Provider value={{ cart, setCart, addToCart, cartCount }}>
        {children}
      </CartCtx.Provider>
    </TweaksCtx.Provider>
  );
}

export function useTweakState() {
  const v = React.useContext(TweaksCtx);
  if (!v) throw new Error("useTweakState must be used inside Providers");
  return v;
}

export function useTweakValues() {
  return useTweakState().t;
}

export function useCart() {
  const v = React.useContext(CartCtx);
  if (!v) throw new Error("useCart must be used inside Providers");
  return v;
}
