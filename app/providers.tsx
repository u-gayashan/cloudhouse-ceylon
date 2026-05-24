"use client";

import React from "react";
import { useTweaks } from "@/components/tweaks-panel";
import type { CartLine, TweakValues, Product } from "@/lib/types";

const TWEAK_DEFAULTS: TweakValues = {
  palette: "forest",
  typography: "editorial",
  hero: "editorial",
  shopUnlocked: false,
  audienceCurrent: 1840,
  audienceTarget: 5000,
  dark: false,
  density: "regular",
};

type SetTweakFn = (keyOrEdits: keyof TweakValues | Partial<TweakValues>, val?: unknown) => void;

interface TweaksCtxValue {
  t: TweakValues;
  setTweak: SetTweakFn;
}

interface CartCtxValue {
  cart: CartLine[];
  setCart: React.Dispatch<React.SetStateAction<CartLine[]>>;
  addToCart: (product: Product, qty: number, size: string) => void;
  cartCount: number;
}

const TweaksCtx = React.createContext<TweaksCtxValue | null>(null);
const CartCtx = React.createContext<CartCtxValue | null>(null);

export function Providers({ children }: { children: React.ReactNode }) {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [cart, setCart] = React.useState<CartLine[]>([]);

  React.useEffect(() => {
    const r = document.documentElement;
    r.setAttribute("data-palette", t.palette);
    r.setAttribute("data-typography", t.typography);
    r.setAttribute("data-hero", t.hero);
    r.setAttribute("data-theme", t.dark ? "dark" : "light");
    r.setAttribute("data-density", t.density);
  }, [t.palette, t.typography, t.hero, t.dark, t.density]);

  const addToCart = React.useCallback((product: Product, qty: number, size: string) => {
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
    <TweaksCtx.Provider value={{ t, setTweak: setTweak as SetTweakFn }}>
      <CartCtx.Provider value={{ cart, setCart, addToCart, cartCount }}>
        {children}
      </CartCtx.Provider>
    </TweaksCtx.Provider>
  );
}

export function useTweakState(): TweaksCtxValue {
  const v = React.useContext(TweaksCtx);
  if (!v) throw new Error("useTweakState must be used inside Providers");
  return v;
}

export function useTweakValues(): TweakValues {
  return useTweakState().t;
}

export function useCart(): CartCtxValue {
  const v = React.useContext(CartCtx);
  if (!v) throw new Error("useCart must be used inside Providers");
  return v;
}
