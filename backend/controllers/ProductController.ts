import { Request, Response } from "express"
import { sql } from "../config/db.js"

// CRUD

export const getAllProducts=async (req:Request,res:Response):Promise<void>=>{
    try {
        const products=await sql`
            SELECT * FROM products
            ORDER BY created_at DESC
        `;
        console.log("fetched list of products:",products)
        res.status(200).json({success:true, data:products})
    } catch (error) {
        console.log("Error get all products",error)
        return void res.status(500).json({success:false, message:"Internal server error"})
    }
}

export const createProduct=async (req:Request,res:Response):Promise<void>=>{
    const {name,price,image}= req.body

    if(!name || !price || !image){
        res.status(400).json({success:false, message:"All fields are required"})
        return;
    }

    try {
        const newProduct=await sql`
            INSERT INTO products (name,price,image)
            VALUES (${name},${price},${image})
            RETURNING *
        `
        console.log('new product created:', newProduct);
        res.status(201).json({success:true, message:newProduct[0]})
        
    } catch (error) {
        console.log("Error creating product",error)
        return void res.status(400).json({success:false, message:"Internal server error"})
    }
}

export const getProduct=async (req:Request, res:Response):Promise<void>=>{
    const {id}=req.params
    
    try {
        const product=await sql`
            SELECT * FROM products WHERE id=${id} 
        `;

        if (!product.length) {
            res.status(404).json({ success: false, message: "Product not found" });
            return;
        }

        res.status(200).json({success:true, message:product[0]})
    } catch (error) {
        console.log("Error in getProduct function",error)
        res.status(500).json({success:false, message:"Internal server error"})
        return;
    }
}
export const updateProduct=async (req:Request, res:Response):Promise<void>=>{
    const {id}=req.params
    const {name, price, image}= req.body

    try {
        const updatedProduct= await sql`
            UPDATE products
            SET name=${name}, price=${price}, image=${image}
            WHERE id=${id}
            RETURNING *
        `

        if(updatedProduct.length ===0){
            return void res.status(404).json({
                success:false,
                message:"Product not found"
            });
        }

        res.status(201).json({success:true, message:updatedProduct[0]})
    } catch (error) {
        console.log("Error in updating product",error)
        return void res.status(500).json({success:false, message:"Internal server error"})
    }

}
export const deleteProduct=async (req:Request, res:Response):Promise<void>=>{
    const {id}=req.params

    try {
        const deletedProduct= await sql`
            DELETE FROM products WHERE id=${id}
            RETURNING *
        `

        if(deletedProduct.length===0){
            return void res.status(404).json({
                success:false,
                message:"Product not found"
            })
        }

        res.status(200).json({success:true, message:deletedProduct[0]})
    } catch (error) {
        console.log("Error in deleting product",error)
        return void res.status(500).json({success:false, message:"Internal server error"})
    }
}