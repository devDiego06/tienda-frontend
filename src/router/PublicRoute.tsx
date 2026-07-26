import { Navigate } from "react-router-dom";
import { useAuthStore } from "../store/Auth.store";
import type { ReactNode } from "react";

interface Props {
    children: ReactNode
}


export default function PublicRoute({ children }: Props) {
    const token = useAuthStore(state => state.token);
    const user = useAuthStore(state => state.user);
  

    if (token && user) {
        if (user.role === 'ADMIN') return <Navigate to={'/admin/dashboard'} replace />
        if (user.role === 'CUSTOMER') return <Navigate to={'/catalogo'} replace />
    }



    return <>
        {children}
    </>
}
