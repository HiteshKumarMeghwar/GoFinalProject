import React, {SyntheticEvent} from 'react'

function Nav() {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
        <div className="container-fluid">
          <a href="/" className="navbar-brand">Home</a>
          <div>
          <ul className="navbar-nav me-auto mb-2 mb-md-0">
            <li className="nav-item">
              <a href="/login" className="nav-link">Login</a>
            </li>
            <li className="nav-item">
              <a href="/register" className="nav-link">Register</a>
            </li>
          </ul>
          </div>
        </div>
    </nav>
  )
}

export default Nav
