import type { ReactNode } from "react";
import { useAuthStore } from "../store/Auth.store";
import { Navigate } from "react-router-dom";

interface Props {
    children: ReactNode
    requiredRole?: 'CUSTOMER' | 'ADMIN'
}


export default function ProtectedRoutes({ children, requiredRole }: Props) {
    const token = useAuthStore(state => state.token);
    const user = useAuthStore(state => state.user);



    if (!token || !user) {
        return <Navigate to={'/login'} replace />
    }


    if (requiredRole && user.role !== requiredRole) {
        if (user.role === 'ADMIN') return <Navigate to={'/admin/dashboard'} replace />
        if (user.role === 'CUSTOMER') return <Navigate to={'/catalogo'} replace />
    }

    return <>
        {children}
    </>

}
