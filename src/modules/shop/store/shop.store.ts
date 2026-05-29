import { create } from "zustand";

import type { ShopFilter } from "../shop.types";

interface ShopState {
  filter: ShopFilter;
  updateShopFilter: (filter: Partial<ShopFilter>) => void;
  resetShopFilter: () => void;
}

const shopStore = create<ShopState>((set) => ({
  filter: {},
  updateShopFilter: (filter) =>
    set((s) => ({ filter: { ...s.filter, ...filter } })),
  resetShopFilter: () => set({ filter: {} }),
}));

export default shopStore;
