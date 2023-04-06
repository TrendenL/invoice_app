import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default function RootLayout() {
  return (
    <div>
        <header>
            <nav>
                <h1>.Keeps</h1>
                <NavLink to='/'>Invoices</NavLink>
                <NavLink to='clients' >Clients</NavLink>
                <NavLink to='items' >Items</NavLink>
            </nav>
        </header>

        <main>
            <Outlet/>
        </main>
    </div>
  )
}
