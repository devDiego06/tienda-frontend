import type { Role } from "../../types/auth.types";
import client from "../api";

//TYPES
export interface LoginRequest {
    identifier: string,
    password: string
}

export interface RegisterRequest{
    phone: string,
    name: string,
    password: string,
    address: string
}

export interface AuthResponse{
    token: string,
    userId: string,
    name: string,
    role: Role
}



//METODOS

export const authApi = {
    login: async (body: LoginRequest) => {
        const response = await client.post<AuthResponse>('/auth/login', {
            phone: body.identifier,
            password: body.password
        });
        return response.data;
    },

    register: async (body: RegisterRequest)=>{
        const response = await client.post<AuthResponse>('/auth/register', body);
        return response.data;
    }
}