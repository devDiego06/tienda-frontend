import { create } from "zustand";
import type { Role } from "../types/auth.types";
import { persist } from "zustand/middleware";

interface AuthUser{
    userId: string
    name: string
    role: Role
}

interface AuthState {
    // --estado
    token: string | null
    user: AuthUser | null

    //-acciones
    setAuth: (token: string, user: AuthUser) => void;
    clearAuth: () => void;

    //-- getters derivados
    isAuthenticated: () => boolean;
    isAdmin: () => boolean;
    isCustomer: () => boolean;

}

export const useAuthStore = create<AuthState>()(
    persist(
        (set, get) => ({
            token: null,
            user: null,

            //enviar el usuario y el token
            setAuth: (token, user) => set({token, user}),

            //limpiar la autenticacion
            clearAuth: () => set({token: null, user: null}),

            //verificar si esta autenticado
            isAuthenticated: () => !!get().token,
            isAdmin: () => get().user?.role === "ADMIN",
            isCustomer: () => get().user?.role === "CUSTOMER",
        }),
        {
            name: 'token', //clave en localStorage
        }
    )
)

export const getAuthToken = () => useAuthStore.getState().token
export const clearAuthState = () => useAuthStore.getState().clearAuth()