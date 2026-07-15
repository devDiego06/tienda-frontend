import type { Product } from "../../types";
import client from "../api";

export interface CreateProductRequest {
    name: string;
    price: number;
    description: string;
    imageUrl: string;
    category: string;
    available: boolean;
}

export interface UpdateProductRequest {
    name?: string;
    description?: string;
    price?: number;
    available?: boolean;
    category?: string;
    imageUrl?: string;
}


export const productsApi = {

    getByStore: async (storeId: string) => {
        const res = await client.get<Product[]>(`/products?storeId=${storeId}`)
        return res.data;
    }

    



}