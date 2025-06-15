import { create } from "zustand";
import axios from "axios";
import toast from "react-hot-toast";
// base url will be dynamic depending on the environment
const BASE_URL = import.meta.env.MODE === "development" ? "http://localhost:3000" : "";
export const useProductStore = create((set, get) => ({
    // products state
    products: [],
    loading: false,
    error: null,
    currentProduct: {
        name: "",
        price: "",
        image: "",
    },
    // form state
    formData: {
        name: "",
        price: "",
        image: ""
    },
    setFormData: (formData) => (set({ formData })),
    resetForm: () => set({ formData: { name: "", price: "", image: "" } }),
    addProduct: async (e) => {
        e.preventDefault();
        set({ loading: true });
        try {
            const { formData } = get();
            await axios.post(`${BASE_URL}/api/products`, formData);
            await get().fetchProducts();
            get().resetForm();
            toast.success("Product added successfully");
            // close the modal
            document.getElementById("add_product_modal").close();
        }
        catch (error) {
            console.log("Error in addProduct function", error);
            toast.error("Something went wrong");
        }
        finally {
            set({ loading: false });
        }
    },
    fetchProducts: async () => {
        set({ loading: true });
        try {
            const res = await axios.get(`${BASE_URL}/api/products`);
            set({ products: res.data.data, error: null });
        }
        catch (err) {
            const axiosError = err;
            if (axiosError.response?.status === 409) {
                set({ error: "Rate limit exceeded", products: [] });
            }
            else {
                set({ error: "Something went wrong" });
            }
        }
        finally {
            set({ loading: false });
        }
    },
    deleteProduct: async (id) => {
        set({ loading: true });
        try {
            await axios.delete(`${BASE_URL}/api/products/${id}`);
            set(prev => ({ products: prev.products.filter(product => product.id !== id) }));
            toast.success("Successfully deleted");
        }
        catch (error) {
            console.log("Error in deleted product function", error);
            toast.error("Something went wrong");
        }
        finally {
            set({ loading: false });
        }
    },
    fetchProduct: async (id) => {
        set({ loading: true });
        try {
            const res = await axios.get(`${BASE_URL}/api/products/${id}`);
            console.log(res);
            set({
                currentProduct: res.data.message,
                formData: res.data.message, // prefill form with current product data
                error: null
            });
        }
        catch (err) {
            console.log('Error in fetch Product function:', err);
            set({ error: "Something went wrong", currentProduct: { name: "", price: "", image: "" } });
        }
        finally {
            set({ loading: false });
        }
    },
    updateProduct: async (id) => {
        set({ loading: true });
        try {
            const { formData } = get();
            const response = await axios.put(`${BASE_URL}/api/products/${id}`, formData);
            set({ currentProduct: response.data.data });
            toast.success("Product updated successfully");
        }
        catch (err) {
            toast.error("Something went wrong");
            console.log("Error in updateProduct function", err);
        }
        finally {
            set({ loading: false });
        }
    }
}));
