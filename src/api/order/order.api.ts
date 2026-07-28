import type { Order } from "../../types";
import client from "../api";

export interface CreateOrderRequest {
    items: {
        productId: string;
        quantity: number;
        itemNote?: string;
    }[];
    deliveryType: 'HOME_DELIVERY' | 'STORE_PICKUP';
    paymentMethod: 'CASH' | 'TRANSFER';
    customerNote?: string;
    }



export const orderApi = {
    create: async (productData: CreateOrderRequest) => {
        const res = await client.post<Order>(`/orders`, productData);
        return res.data;
    }
}