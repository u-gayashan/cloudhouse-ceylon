import { create } from "zustand";

interface AdminState {
  sidebarOpen: boolean;
  toggleSidebar: () => void;
}

const adminStore = create<AdminState>((set) => ({
  sidebarOpen: true,
  toggleSidebar: () => set((s) => ({ sidebarOpen: !s.sidebarOpen })),
}));

export default adminStore;
