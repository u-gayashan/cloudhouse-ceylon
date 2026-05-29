import type { CartLine } from "./cart.types";

export const cartSubtotal = (lines: CartLine[]): number =>
  lines.reduce((s, l) => s + l.product.price * l.qty, 0);

export const cartCount = (lines: CartLine[]): number =>
  lines.reduce((s, l) => s + l.qty, 0);
