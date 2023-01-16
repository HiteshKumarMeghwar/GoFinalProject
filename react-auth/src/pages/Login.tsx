import React, {useState, SyntheticEvent} from 'react'
import {useNavigate} from 'react-router-dom';

function Login(props:{name: string, setName: (name: string) => void }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const submit = async (e: SyntheticEvent) => {
    e.preventDefault();
    const response = await fetch("http://localhost:8080/api/login", {
      method: "POST",
      headers: {'Content-Type':'application/json'},
      credentials: 'include',
      body: JSON.stringify({
        email,
        password
      })
    })
    const content = await response.json()
    props.setName(content.name)
    return navigate('/')
  }
  

  return (
    <form onSubmit={submit}>
        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
        <input type="email" name='email' id='email' className="form-control" placeholder="Enter Your Email" onChange={e => setEmail(e.target.value)} />
        <input type="password" name='password' id='password' className="form-control" placeholder="Enter Your Password" onChange={e => setPassword(e.target.value)} />
        <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
    </form>
  )
}

export default Login
