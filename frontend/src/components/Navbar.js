import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link, useLocation } from "react-router-dom";
import { ShoppingBagIcon, ShoppingCartIcon } from "lucide-react";
import ThemeSelector from "./ThemeSelector";
function Navbar() {
    const { pathname } = useLocation();
    const isHomePage = pathname === "/";
    return (_jsx("div", { className: "bg-base-100/80 backdrop-blur-lg border-b border-base-content/10 sticky top-0 z-50", children: _jsx("div", { className: "max-w-7xl mx-auto", children: _jsxs("div", { className: "navbar px-4 min-h-[4rem] justify-between", children: [_jsx("div", { className: "flex-1 lg:flex-none", children: _jsx(Link, { to: "/", className: "hover:opacity-80 transition-opacity", children: _jsxs("div", { className: "flex items-center gap-2", children: [_jsx(ShoppingCartIcon, { className: "size-9 text-primary" }), _jsx("span", { className: "font-semibold font-mono tracking-widest text-2xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary", children: "EXPLOR" })] }) }) }), _jsxs("div", { className: "flex items-center gap-4", children: [_jsx(ThemeSelector, {}), isHomePage && (_jsx("div", { className: "indicator", children: _jsxs("div", { className: "p-2 rounded-full hover:bg-base-200 transition-colors", children: [_jsx(ShoppingBagIcon, { className: "size-5" }), _jsx("span", { className: "badge badge-sm badge-primary indicator-item", children: "8" })] }) }))] })] }) }) }));
}
export default Navbar;
