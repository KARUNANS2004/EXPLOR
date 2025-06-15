import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { EditIcon, Trash2Icon } from "lucide-react";
import { Link } from "react-router-dom";
import { useProductStore } from "../store/useProductStore";
function ProductCard({ product }) {
    const { deleteProduct } = useProductStore();
    return (_jsxs("div", { className: "card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300", children: [_jsx("figure", { className: "relative pt-[56.25%]", children: _jsx("img", { src: product.image, alt: product.name, className: "absolute top-0 left-0 w-full h-full object-cover" }) }), _jsxs("div", { className: "card-body", children: [_jsx("h2", { className: "card-title text-lg font-semibold", children: product.name }), _jsxs("p", { className: "text-2xl font-bold text-primary", children: ["$", Number(product.price).toFixed(2)] }), _jsxs("div", { className: "card-actions justify-end mt-4", children: [_jsx(Link, { to: `/products/${product.id}`, className: "btn btn-sm btn-info btn-outline", children: _jsx(EditIcon, { className: "size-4" }) }), _jsx("button", { className: "btn btn-sm btn-error btn-outline", onClick: () => { deleteProduct(product.id); }, children: _jsx(Trash2Icon, { className: "size-4" }) })] })] })] }));
}
export default ProductCard;
