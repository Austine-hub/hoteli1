import { create } from "zustand";

interface NavState {
  activeNav: string;
  setActiveNav: (item: string) => void;
}

export const useNavStore = create<NavState>((set) => ({
  activeNav: "Courses", // default
  setActiveNav: (item) => set({ activeNav: item }),
}));
