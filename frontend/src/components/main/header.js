import '../../stylesheets/header.css';
import React, { useState } from "react";
import Signup from "../../components/main/signup";
import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import Button from '@mui/material/Button';
import { Context } from "../../Context";

const Header = (props) => {
    const [signupOpen, setSignupOpen] = useState(false);
    const currentUser = sessionStorage.getItem("user");
    const [List, setList, loading, setLoading] =
      useContext(Context);
  
    const logout = () => {
      sessionStorage.removeItem("user");
      window.location.replace("./login");
    };
  
    const showLoggedIn = () => {
      if (currentUser) {
        return (
          <>
                      <li className="nav-item">
              <Link className="nav-link" to="/main/addreview">
                Add Review
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/main/comparison">
                Comparison
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link" to="../admin/dashboard">
                Dashboard
              </Link>
            </li> */}

            

  
            <li className="nav-item">
              <button onClick={logout} className="btn btn-danger">
                Logout
              </button>
            </li>
          </>
        );
      } else {
        return (
            <>
              <li className="nav-item">
                <NavLink className="nav-link" to="./login" activeClassName="active">
                  Login
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="./signup" activeClassName="active">
                  Signup
                </NavLink>
              </li>
            </>
          );
        }
      };
    return (
    
            <nav className="navbar navbar-expand-lg bg-light n-wrapper">
              <div className="container-fluid nav-link ">
                <Link className="navbar-brand n-name n-left " to="/main/home">
                  Cody
                </Link>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="n-right">
                <div className="collapse navbar-collapse n-list" id="navbarSupportedContent">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{ listStyleType: "none" }}>
                    <li className="nav-item">
                      <NavLink
                        activeClassName="active"
                        className="nav-link"
                        to="./browseplatform"
                      >
                        Browse Platform
                      </NavLink>
                      
                    
                    </li>

                    <li className="nav-item">
                      <NavLink
                        activeClassName="active"
                        className="nav-link"
                        to="./browsereview"
                      >
                        Reviews
                      </NavLink>
                    </li>
                    
                   
                     
                    {showLoggedIn()}
                    {/* <a class="css-1d9t0rk-MuiButtonBase-root-MuiButton-root" href="/main/signup">Get Started</a> */}
                  </ul>
                 
                </div>
              </div>
              </div>
            </nav>
            
          )
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <div class="container-fluid">
                <a class="navbar-brand" href="#">
                  Cody
                </a>
                <button
                  class="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNavDropdown"
                  aria-controls="navbarNavDropdown"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                  <ul class="navbar-nav">
                    <li class="nav-item">
                      <a class="nav-link active" aria-current="page" href="#">
                        Home
                      </a>
                    </li>
        
                
                    <li class="nav-item">
                      <a class="nav-link" href="/list">
                        Browse Platform
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#pricing">
                        Comparison
                      </a>
                    </li>

                    {showLoggedIn()}
        
                    <NavLink to="/signup" activeClassName="">
                      Signup
                    </NavLink>
                    {signupOpen && <Signup setOpenSignup={setSignupOpen} />}
                    <a href="/main/signup">
                  <Button variant="contained">Get Started</Button></a>
                  </ul>
                </div>
              </div>
            </nav>
          );
        };
        
export default Header;