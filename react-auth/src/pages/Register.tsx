import React, {useState, SyntheticEvent} from 'react'

function Register() {
 
  return (
    <form>
        <h1 className="h3 mb-3 fw-normal">Please sign Up</h1>
        <input type="name" name='name' id='name' className="form-control" placeholder="Enter Your Name" />
        <input type="email" name='email' id='email' className="form-control" placeholder="Enter Your Email" />
        <input type="password" name='password' id='password' className="form-control" placeholder="Enter Your Password"/>
        <button className="w-100 btn btn-lg btn-primary" type="submit">Sign Up</button>
    </form>
  )
}

export default Register
