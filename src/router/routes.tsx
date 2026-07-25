import { createBrowserRouter, Navigate } from 'react-router-dom'
import AdminLayout from '../layouts/AdminLayout'
import DashboardPage from '../page/admin/DashboardPage'
import ProductsPage from '../page/admin/ProductsPage'
import LoginPage from '../page/auth/LoginPage'
import RegisterPage from '../page/auth/RegisterPage'
import PedidosPage from '../page/admin/PedidosPage'
import PublicRoute from './PublicRoute'
import ProtectedRoute from './ProtectedRoutes'
import CatalogoPage from '../page/public/CatalogoPage'
import ChechkoutPage from '../page/public/ChechkoutPage'


export const routes = createBrowserRouter([
    { path: '/', element: <Navigate to="/login" replace /> },


    {
        path: '/login',
        element: (
            <PublicRoute>
                <LoginPage />
            </PublicRoute>
        )
    },
    {
        path: '/register',
        element: (
            <PublicRoute>
                <RegisterPage />
            </PublicRoute>
        )
    },
    {
        path: '/catalogo',
        element: (
            <ProtectedRoute requiredRole="CUSTOMER">
                <CatalogoPage />
            </ProtectedRoute>
        )
    },
     {
        path: '/checkout',
        element: (
            <ProtectedRoute requiredRole="CUSTOMER">
                <ChechkoutPage />
            </ProtectedRoute>
        )
    },
    {
        element: (
            <ProtectedRoute requiredRole="ADMIN">
                <AdminLayout />
            </ProtectedRoute>
        ),
        children: [
            { path: '/admin/dashboard', element: <DashboardPage /> },
            { path: '/admin/pedidos', element: <PedidosPage /> },
            { path: '/admin/products', element: <ProductsPage /> },
        ]
    }
])