import React, { useState } from 'react'

export default function Login(){
  const [form,setForm] = useState({ usernameOrEmail:'', password:'' })
  const [msg,setMsg] = useState('')

  const submit = async (e) => {
    e.preventDefault()
    const res = await fetch('http://localhost:8080/api/auth/login', {
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body: JSON.stringify(form)
    })
    const data = await res.json().catch(()=>null)
    if (res.ok) {
      localStorage.setItem('token', data.token)
      setMsg('Login successful')
    } else setMsg(data || 'Login failed')
  }

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={submit}>
        <input placeholder="Username or Email" value={form.usernameOrEmail} onChange={e=>setForm({...form,usernameOrEmail:e.target.value})} />
        <input placeholder="Password" type="password" value={form.password} onChange={e=>setForm({...form,password:e.target.value})} />
        <button type="submit">Login</button>
      </form>
      <div>{msg}</div>
    </div>
  )
}
