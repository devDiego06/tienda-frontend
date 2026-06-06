import React from 'react'
import { Routes, Route, BrowserRouter, createBrowserRouter } from 'react-router-dom'
import LoginPage from '../page/auth/LoginPage'
import RegisterPage from '../page/auth/RegisterPage'



export const router = createBrowserRouter([
    { path: '/', element: <LoginPage /> },
    { path: '/register', element: <RegisterPage /> },
])
