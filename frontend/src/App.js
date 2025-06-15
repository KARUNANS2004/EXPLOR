import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Navbar from "./components/Navbar";
import './index.css';
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import { Routes, Route } from "react-router-dom";
import { useThemeStore } from "./store/useThemeStore";
import { Toaster } from "react-hot-toast";
function App() {
    const { theme } = useThemeStore();
    return (_jsxs("div", { "data-theme": theme, className: "min-h-screen bg-base-200 transition-colors duration-300", children: [_jsx(Navbar, {}), _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(HomePage, {}) }), _jsx(Route, { path: "/products/:id", element: _jsx(ProductPage, {}) })] }), _jsx(Toaster, {})] }));
}
export default App;
