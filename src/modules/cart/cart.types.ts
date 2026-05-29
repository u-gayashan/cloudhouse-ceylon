import type { Product } from "@/modules/shop/shop.types";

export interface CartLine {
  id: string;
  product: Product;
  qty: number;
  size: string;
}
