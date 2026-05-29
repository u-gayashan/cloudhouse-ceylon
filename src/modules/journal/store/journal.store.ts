import { create } from "zustand";

import type { JournalListFilter } from "../journal.types";

interface JournalState {
  filter: JournalListFilter;
  updateJournalFilter: (filter: Partial<JournalListFilter>) => void;
  resetJournalFilter: () => void;
}

const journalStore = create<JournalState>((set) => ({
  filter: {},
  updateJournalFilter: (filter) =>
    set((s) => ({ filter: { ...s.filter, ...filter } })),
  resetJournalFilter: () => set({ filter: {} }),
}));

export default journalStore;
