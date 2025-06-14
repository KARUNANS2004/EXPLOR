import { create } from "zustand";

type ThemeStore = {
  theme: string ;
  setTheme: (theme: string) => void;
};

export const useThemeStore = create<ThemeStore>((set) => ({
  theme: localStorage.getItem("preferred-theme") || "forest",
  setTheme: (theme) => {
    localStorage.setItem("preferred-theme", theme);
    console.log(theme)
    set({theme})
  },
}));
