import React from 'react'
import {NavLink} from "react-router-dom"
 
export const Navbar = () => {
    return (
        <div>
        
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        
          <div className="container-fluid">
            
            <button
              className="navbar-toggler"
              type="button"
              data-mdb-toggle="collapse"
              data-mdb-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fas fa-bars"></i>
            </button>
        
    
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              
              <NavLink className="navbar-brand mt-2 mt-lg-0" to="#">
                <img
                  src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp"
                  height="15"
                  alt="MDB Logo"
                  loading="lazy"
                />
              </NavLink>
        
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink className="nav-link" to="#">Dashboard</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="#">Team</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="#">Projects</NavLink>
                </li>
              </ul>
            
            </div>

            <div className="d-flex align-items-center">
              
              <NavLink className="text-reset me-3" to="#">
                <i className="fas fa-shopping-cart"></i>
              </NavLink>
        
            
              <div className="dropdown">
                <NavLink
                  className="text-reset me-3 dropdown-toggle hidden-arrow"
                  to="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-mdb-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="fas fa-bell"></i>
                  <span className="badge rounded-pill badge-notification bg-danger">1</span>
                </NavLink>
                <ul
                  className="dropdown-menu dropdown-menu-end"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <NavLink className="dropdown-item" to="#">Some news</NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="#">Another news</NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="#">Something else here</NavLink>
                  </li>
                </ul>
              </div>
            
              <div className="dropdown">
                <NavLink
                  className="dropdown-toggle d-flex align-items-center hidden-arrow"
                  to="#"
                  id="navbarDropdownMenuAvatar"
                  role="button"
                  data-mdb-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                    className="rounded-circle"
                    height="25"
                    alt="Black and White Portrait of NavLink Man"
                    loading="lazy"
                  />
                </NavLink>
                <ul
                  className="dropdown-menu dropdown-menu-end"
                  aria-labelledby="navbarDropdownMenuAvatar"
                >
                  <li>
                    <NavLink className="dropdown-item" to="/profile">My profile</NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="#">Settings</NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/main/signup">Logout</NavLink>
                  </li>
                </ul>
              </div>
            </div>
        
          </div>
          
        </nav>
    
        </div>
    )
}
export default Navbar