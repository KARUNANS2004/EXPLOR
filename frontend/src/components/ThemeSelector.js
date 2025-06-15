import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { PaletteIcon } from "lucide-react";
import { THEMES } from "../constants";
import { useThemeStore } from "../store/useThemeStore";
function ThemeSelector() {
    const { theme, setTheme } = useThemeStore();
    return (_jsxs("div", { className: "dropdown dropdown-end", children: [_jsx("button", { tabIndex: 0, className: "btn btn-ghost btn-circle", children: _jsx(PaletteIcon, { className: "size-5" }) }), _jsx("div", { tabIndex: 0, className: "dropdown-content mt-2 p-1 shadow-2xl bg-base-200 backdrop-blur-lg rounded-2xl\r\n        w-56 border border-base-content/10 ", children: THEMES.map((themeOption) => (_jsxs("button", { className: `w-full px-4 py-3 rounded-xl flex items-center gap-3 transition-colors 
                            ${theme === themeOption.name
                        ? "bg-primary/10 text-primary"
                        : "hover:bg-base-content/5"}`, onClick: () => setTheme(themeOption.name), children: [_jsx(PaletteIcon, { className: "size-4" }), _jsx("span", { className: "text-sm font-medium", children: themeOption.label }), _jsx("div", { className: "ml-auto flex gap-1", children: themeOption.colors.map((color, i) => (_jsx("span", { className: "size-2 rounded-full", style: { backgroundColor: color } }, i))) })] }, themeOption.name))) })] }));
}
export default ThemeSelector;
