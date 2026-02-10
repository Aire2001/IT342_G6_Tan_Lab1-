import React from 'react'
import { useState } from 'react'
import Register from './components/Register'
import Login from './components/Login'
import Dashboard from './components/Dashboard'

export default function App() {
  const [page, setPage] = useState('login')

  return (
    <div style={{padding:20}}>
      <nav>
        <button onClick={() => setPage('register')}>Register</button>
        <button onClick={() => setPage('login')}>Login</button>
        <button onClick={() => setPage('dashboard')}>Dashboard</button>
      </nav>
      <hr />
      {page === 'register' && <Register />}
      {page === 'login' && <Login />}
      {page === 'dashboard' && <Dashboard />}
    </div>
  )
}
