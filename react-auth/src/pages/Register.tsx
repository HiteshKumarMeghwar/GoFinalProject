import React, {useState, SyntheticEvent} from 'react'
import {useNavigate} from 'react-router-dom';

function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const submit = async (e: SyntheticEvent) => {
    e.preventDefault()
    await fetch("http://localhost:8080/api/register", {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({
        name,
        email,
        password
      })
    })
    return navigate("/login")
  }

  return (
    <form onSubmit={submit}>
        <h1 className="h3 mb-3 fw-normal">Please sign Up</h1>
        <input type="name" name='name' id='name' className="form-control" placeholder="Enter Your Name" onChange={e => setName(e.target.value)} />
        <input type="email" name='email' id='email' className="form-control" placeholder="Enter Your Email" onChange={e => setEmail(e.target.value)} />
        <input type="password" name='password' id='password' className="form-control" placeholder="Enter Your Password" onChange={e => setPassword(e.target.value)} />
        <button className="w-100 btn btn-lg btn-primary" type="submit">Sign Up</button>
    </form>
  )
}

export default Register
