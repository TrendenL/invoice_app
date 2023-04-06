import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from 'react-router-dom'

// pages
import Invoices from './pages/Invoices/Invoices'
import Clients from './pages/clients/Clients'
import Items from './pages/items/Items'

// layouts
import RootLayout from './layouts/RootLayout'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />} >
      <Route index element={<Invoices />} />
      <Route path='clients' element={<Clients />} />
      <Route path='items' element={<Items />} />
    </Route>

  )
)


export default function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

