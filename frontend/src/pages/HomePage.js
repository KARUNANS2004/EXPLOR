import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect } from "react";
import { useProductStore } from "../store/useProductStore";
import { PackageIcon, PlusCircleIcon, RefreshCcwIcon } from "lucide-react";
import ProductCard from "../components/ProductCard";
import AddProductModal from "../components/AddProductModal";
function HomePage() {
    const { products, loading, error, fetchProducts } = useProductStore();
    useEffect(() => {
        fetchProducts();
    }, [fetchProducts]);
    console.log(products);
    return (_jsxs("main", { className: "max-w-6xl mx-auto px-4 py-8 ", children: [_jsxs("div", { className: "flex justify-between items-center mb-8", children: [_jsxs("button", { className: "btn btn-primary", onClick: () => document.getElementById("add_product_modal").showModal(), children: [_jsx(PlusCircleIcon, { className: "size-5 mr-2" }), "Add Product"] }), _jsx("button", { className: "btn btn-ghost btn-circle", onClick: fetchProducts, children: _jsx(RefreshCcwIcon, { className: "size-5" }) })] }), _jsx(AddProductModal, {}), error && _jsx("div", { className: "alert alert-error mb-8", children: error }), products.length === 0 && !loading && (_jsxs("div", { className: "flex flex-col justify-center items-center h-96 space-y-4", children: [_jsx("div", { className: "bg-base-100 rounded-full p-6", children: _jsx(PackageIcon, { className: "size-12" }) }), _jsxs("div", { className: "text-center space-y-2", children: [_jsx("h3", { className: "text-2xl font-semibold", children: "No products found" }), _jsx("p", { className: "text-gray-500 max-w-sm", children: "Get started by adding first product to your inventory" })] })] })), loading ? (_jsx("div", { className: "flex justify-center items-center h-64", children: _jsx("div", { className: "loading loading-spinner loading-lg" }) })) : (_jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: products.map((product) => (_jsx(ProductCard, { product: product }, product.id))) }))] }));
}
export default HomePage;
