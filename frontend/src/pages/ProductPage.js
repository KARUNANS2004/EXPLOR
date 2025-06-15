import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useNavigate, useParams } from "react-router-dom";
import { useProductStore } from "../store/useProductStore";
import { useEffect } from "react";
import { ArrowLeftIcon, SaveIcon, Trash2Icon } from "lucide-react";
function ProductPage() {
    const { currentProduct, formData, setFormData, error, loading, fetchProduct, updateProduct, deleteProduct } = useProductStore();
    const navigate = useNavigate();
    // to fetch params
    const { id } = useParams();
    useEffect(() => {
        fetchProduct(Number(id));
    }, [fetchProduct, id]);
    console.log(currentProduct);
    const handleDelete = async () => {
        if (window.confirm("Are you sure you want to delete this product?")) {
            await deleteProduct(Number(id));
            navigate("/");
        }
    };
    if (loading) {
        return (_jsx("div", { className: "flex justify-center items-center min-h-screen", children: _jsx("div", { className: "loading loading-spinner loading-lg" }) }));
    }
    if (error) {
        return (_jsx("div", { className: "container mx-auto px-4 py-8", children: _jsx("div", { className: "alert alert-error" }) }));
    }
    return (_jsxs("div", { className: "container mx-auto px-4 py-8 max-w-4xl", children: [_jsxs("button", { onClick: () => { navigate("/"); }, className: "btn btn-ghost mb-8", children: [_jsx(ArrowLeftIcon, { className: "size-2 mr-2" }), "Back to products"] }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8", children: [_jsx("div", { className: "rounded-lg overflow-hidden shadow-lg bg-base-100", children: _jsx("img", { src: currentProduct?.image, alt: currentProduct.name, className: "size-full object-cover" }) }), _jsx("div", { className: "card bg-ba-10 shadow-lg", children: _jsxs("div", { className: "card-body", children: [_jsx("h2", { className: "card-title text-2xl mb-6", children: "Edit Product" }), _jsxs("form", { onSubmit: (e) => {
                                        e.preventDefault();
                                        updateProduct(Number(id));
                                    }, className: "space-y-6", children: [_jsxs("div", { className: "form-control", children: [_jsx("label", { className: "label", children: _jsx("span", { className: "label-text text-base font-medium" }) }), _jsx("input", { type: "text", placeholder: "Enter Product Name", className: "input input-bordered w-full", value: formData.name, onChange: (e) => setFormData({ ...formData, name: e.target.value }) })] }), _jsxs("div", { className: "form-control", children: [_jsx("label", { className: "label", children: _jsx("span", { className: "label-text text-base font-medium", children: "Price" }) }), _jsx("input", { type: "number", min: "0", step: "0.01", placeholder: "0.00", className: "input input-bordered w-full", value: formData.price, onChange: (e) => setFormData({ ...formData, price: e.target.value }) })] }), _jsxs("div", { className: "form-control", children: [_jsx("label", { className: "label", children: _jsx("span", { className: "label-text text-base font-medium", children: "Image URL" }) }), _jsx("input", { type: "text", placeholder: "https://example.com/image.jpg", className: "input input-bordered w-full", value: formData.image, onChange: (e) => setFormData({ ...formData, image: e.target.value }) })] }), _jsxs("div", { className: "flex justify-between mt-8", children: [_jsxs("button", { type: "button", onClick: handleDelete, className: "btn btn-error", children: [_jsx(Trash2Icon, { className: "size-4 mr-2" }), "Delete Product"] }), _jsx("button", { type: "submit", className: "btn btn-primary", disabled: loading || !formData.name || !formData.price || !formData.image, onClick: () => { navigate("/"); }, children: loading ? (_jsx("span", { className: "loading loading-spinner loading-sm" })) : (_jsxs(_Fragment, { children: [_jsx(SaveIcon, { className: "size-4 mr-2" }), "Save Changes"] })) })] })] })] }) })] })] }));
}
export default ProductPage;
