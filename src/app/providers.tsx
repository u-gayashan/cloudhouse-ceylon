"use client";

import React from "react";

import cartStore from "@/modules/cart/store/cart.store";
import tweaksStore from "@/store/tweaksStore";
import type { Product } from "@/modules/shop/shop.types";
import type { CartLine } from "@/modules/cart/cart.types";
import type { TweakValues } from "@/type/commen.types";

export function Providers({ children }: { children: React.ReactNode }) {
  const { palette, typography, hero, dark, density } = tweaksStore((s) => s.t);

  React.useEffect(() => {
    const r = document.documentElement;
    r.setAttribute("data-palette", palette);
    r.setAttribute("data-typography", typography);
    r.setAttribute("data-hero", hero);
    r.setAttribute("data-theme", dark ? "dark" : "light");
    r.setAttribute("data-density", density);
  }, [palette, typography, hero, dark, density]);

  return <>{children}</>;
}

// Thin compatibility hooks backed by Zustand stores.
// Existing pages import these — keep the same surface.

interface TweaksCtxValue {
  t: TweakValues;
  setTweak: <K extends keyof TweakValues>(
    keyOrEdits: K | Partial<TweakValues>,
    val?: TweakValues[K],
  ) => void;
}

export function useTweakState(): TweaksCtxValue {
  const t = tweaksStore((s) => s.t);
  const setTweak = tweaksStore((s) => s.setTweak);
  return { t, setTweak };
}

export function useTweakValues(): TweakValues {
  return tweaksStore((s) => s.t);
}

interface CartCtxValue {
  cart: CartLine[];
  setCart: (cart: CartLine[]) => void;
  addToCart: (product: Product, qty: number, size: string) => void;
  cartCount: number;
}

export function useCart(): CartCtxValue {
  const cart = cartStore((s) => s.cart);
  const setCart = cartStore((s) => s.setCart);
  const addToCart = cartStore((s) => s.addToCart);
  const cartCount = cart.reduce((sum, l) => sum + l.qty, 0);
  return { cart, setCart, addToCart, cartCount };
}
