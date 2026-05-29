import type { Product, ShopFilter } from "./shop.types";

export const formatPrice = (price: number): string =>
  `LKR ${price.toLocaleString()}`;

export const applyShopFilter = (
  products: Product[],
  filter: ShopFilter,
): Product[] =>
  products.filter((p) => {
    if (filter.region && p.region !== filter.region) return false;
    if (filter.minPrice != null && p.price < filter.minPrice) return false;
    if (filter.maxPrice != null && p.price > filter.maxPrice) return false;
    return true;
  });
