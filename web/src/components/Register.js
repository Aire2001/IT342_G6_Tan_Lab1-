import React, { useState } from 'react'

export default function Register() {
  const [form, setForm] = useState({ username:'', email:'', password:'', firstName:'', lastName:'' })
  const [msg, setMsg] = useState('')

  const submit = async (e) => {
    e.preventDefault()
    const res = await fetch('http://localhost:8080/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type':'application/json' },
      body: JSON.stringify(form)
    })
    const data = await res.json().catch(()=>null)
    if (res.ok) setMsg('Registered successfully')
    else setMsg(data || 'Registration failed')
  }

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={submit}>
        <input placeholder="Username" value={form.username} onChange={e=>setForm({...form,username:e.target.value})} />
        <input placeholder="Email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} />
        <input placeholder="Password" type="password" value={form.password} onChange={e=>setForm({...form,password:e.target.value})} />
        <input placeholder="First name" value={form.firstName} onChange={e=>setForm({...form,firstName:e.target.value})} />
        <input placeholder="Last name" value={form.lastName} onChange={e=>setForm({...form,lastName:e.target.value})} />
        <button type="submit">Register</button>
      </form>
      <div>{msg}</div>
    </div>
  )
}
