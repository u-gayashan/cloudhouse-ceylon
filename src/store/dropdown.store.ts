import { create } from "zustand";

import { DropdownType } from "@/type/commen.types";

interface DropdownState {
  options: Record<string, DropdownType[]>;
  setOptions: (key: string, options: DropdownType[]) => void;
  clearOptions: () => void;
}

const dropdownStore = create<DropdownState>((set) => ({
  options: {},
  setOptions: (key, options) =>
    set((s) => ({ options: { ...s.options, [key]: options } })),
  clearOptions: () => set({ options: {} }),
}));

export default dropdownStore;
