import React from 'react'

function Login() {
  return (
    <form>
        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
        <input type="email" className="form-control" placeholder="Enter Your Email" />
        <input type="password" className="form-control" placeholder="Enter Your Password" />
        <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
    </form>
  )
}

export default Login
