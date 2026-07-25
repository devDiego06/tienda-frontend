# Tienda Barrio Frontend

<p align="center">
  <img src="public/logo.svg" alt="Logo de Tienda Barrio" width="420" />
</p>

Frontend de una tienda de barrio construido con React, TypeScript y Vite. La app permite a los clientes navegar el catálogo, agregar productos al carrito y completar el checkout, mientras que el panel administrativo permite gestionar productos, pedidos y el dashboard.

## Funcionalidades

- Autenticación de usuarios con vistas de login y registro.
- Catálogo de productos para clientes.
- Carrito de compras con cálculo de subtotal y costo de envío.
- Flujo de checkout para finalizar pedidos.
- Panel administrativo con dashboard, gestión de productos y pedidos.
- Interfaz oscura con acentos verde lima y estilo moderno.

## Tecnologías

- React 19
- TypeScript
- Vite
- Tailwind CSS
- Zustand
- React Router DOM
- Axios

## Rutas principales

- `/login` y `/register` para acceso de usuarios.
- `/catalogo` para clientes.
- `/checkout` para finalizar la compra.
- `/admin/dashboard`, `/admin/products` y `/admin/pedidos` para administración.

## Instalación

1. Clona el repositorio.
2. Instala dependencias con `npm install`.
3. Ejecuta el entorno local con `npm run dev`.

## Scripts disponibles

- `npm run dev`: inicia el servidor de desarrollo.
- `npm run build`: compila la aplicación para producción.
- `npm run lint`: valida el código con ESLint.
- `npm run preview`: previsualiza la versión compilada.

## Estructura general

- `src/page/public`: catálogo y checkout.
- `src/page/auth`: login y registro.
- `src/page/admin`: dashboard y administración.
- `src/components`: componentes reutilizables.
- `src/store`: estado global con Zustand.
- `src/api`: consumo de servicios.

## Logo

El logo del proyecto está en `public/logo.svg`. Puedes reutilizarlo en el README, en el favicon o en cualquier material de presentación del proyecto.

## Nota

Este README está pensado para GitHub y para personas que quieran entender rápidamente qué hace la aplicación, cómo correrla y dónde encontrar sus piezas principales.
