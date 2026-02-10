import React, { useEffect, useState } from 'react'

export default function Dashboard(){
  const [user,setUser] = useState(null)
  const [msg,setMsg] = useState('')

  useEffect(()=>{
    const load = async ()=>{
      const token = localStorage.getItem('token')
      if (!token) { setMsg('Not authenticated'); return }
      const res = await fetch('http://localhost:8080/api/user/me', {
        headers: { 'Authorization': 'Bearer ' + token }
      })
      if (res.ok) {
        const data = await res.json()
        setUser(data)
      } else {
        setMsg('Failed to load profile')
      }
    }
    load()
  }, [])

  const logout = ()=>{
    localStorage.removeItem('token')
    setUser(null)
    setMsg('Logged out')
  }

  return (
    <div>
      <h2>Dashboard / Profile</h2>
      {user ? (
        <div>
          <div>Username: {user.username}</div>
          <div>Email: {user.email}</div>
          <div>Name: {user.firstName} {user.lastName}</div>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <div>{msg || 'Loading...'}</div>
      )}
    </div>
  )
}
