import React, {SyntheticEvent} from 'react'
import { Link } from 'react-router-dom'
import {useNavigate} from 'react-router-dom';

function Nav(props: {name: string, setName: (name: string) => void }) {
  const navigate = useNavigate();
  const logout = async (e: SyntheticEvent) => {
    e.preventDefault()
    await fetch("http://localhost:8080/api/logout", {
      method: "POST",
      headers: {'Content-Type':'application/json'},
      credentials: 'include'
    })
    props.setName("")
    return navigate('/login')
  }

  let menu;
  if (props.name === undefined) {
    menu = (
      <ul className="navbar-nav me-auto mb-2 mb-md-0">
        <li className="nav-item">
          <Link to="/login" className="nav-link">Login</Link>
        </li>
        <li className="nav-item">
          <Link to="/register" className="nav-link">Register</Link>
        </li>
      </ul>
    )
  } else {
    menu = (
      <ul className="navbar-nav me-auto mb-2 mb-md-0">
        <li className="nav-item">
          <a href="/void" className="nav-link" onClick={logout}>Logout</a>
        </li>
      </ul>
    )
  }

  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">Home</Link>
          <div>
            {menu}
          </div>
        </div>
    </nav>
  )
}

export default Nav
