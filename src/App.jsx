import React from 'react'
import AppRoutes from './utils/AppRoutes'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
export const API_URL='https://65de30f7dccfcd562f568095.mockapi.io/user'
function App() {
  const router=createBrowserRouter(AppRoutes)
  return <>
    <RouterProvider router={router} />
  
  </>
}

export default App