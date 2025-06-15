import { create } from "zustand";
export const useThemeStore = create((set) => ({
    theme: localStorage.getItem("preferred-theme") || "forest",
    setTheme: (theme) => {
        localStorage.setItem("preferred-theme", theme);
        console.log(theme);
        set({ theme });
    },
}));
