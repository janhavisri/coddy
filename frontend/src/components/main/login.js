//import "../../stylesheets/login.css";
import app_config from "../../config";
<<<<<<< HEAD
import Swal from 'sweetalert2';
import { Formik } from 'formik';
import React,{useState} from 'react';

const Login=()=>{
   // const [signupOpen,setOpenSignup] =useState(false);
 


 const url = app_config.api_url;
 
 

 const loginform = {
     email: '',
     password: ''
 }

 const formSubmit = (values) => {

     fetch(url + 'user/getbyemail/' + values.email)
         .then(res => res.json())
         .then(data => {
             if (data) {
                 console.log(data);

                 if (data.password == values.password) {
                     console.log('login success');

                     Swal.fire({
                         icon: 'success',
                         title: 'Login Success',
                     })

                     sessionStorage.setItem('user', JSON.stringify(data));
                     window.location.replace('./browseplatform');

                     return
                 }
             }

             Swal.fire({
                 icon: 'error',
                 title: 'Email or Password Incorrect'
             })

         })


 }
 
   return(
    <div class="login-page">
        
    <div class="form">
    <h1 class="log">Login</h1>
  <Formik
                     initialValues={loginform}
                     onSubmit={formSubmit}
                 >{({
                     values,
                     handleChange,
                     handleSubmit
                 }) => (
                     <form onSubmit={handleSubmit}>
  
  <label className="mt-5 w-100 bg">Email*</label>
                         <input className="form-control" type="email" onChange={handleChange} value={values.email} name="email" required/>

                         <label className="mt-4 bg">Password*</label>
                         <input className="form-control" onChange={handleChange} value={values.password} type="password" name="password" requied/>

                         <button type="submit" className="mt-5 btn btn-primary w-100 "href="/main/userdashboard">Login Now</button>
    </form>
    )}


    </Formik>

</div>
</div>
)
}

=======
import Swal from "sweetalert2";
import { Formik } from "formik";
import React, { useState } from "react";
const Login = () => {
  const url = app_config.api_url;
  const loginform = {
    email: "",
    password: "",
  };

  const formSubmit = (values) => {
    fetch(url + "user/getbyemail/" + values.email)
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          console.log(data);

          if (data.password == values.password) {
            console.log("login success");

            Swal.fire({
              icon: "success",
              title: "Login Success",
            });

            sessionStorage.setItem("user", JSON.stringify(data));
            window.location.replace("/admin/chart");

            return;
          }
        }

        Swal.fire({
          icon: "error",
          title: "Email or Password Incorrect",
        });
      });
  };

  return (
    <div class="jumbotron jumbotron-fluid jumbo fluid">
      <div class="container">
        <div class="row">
          <div class="col-12 col-sm-8 col-md-6 col-lg-4 offset-sm-4 offset-sd-3 offset-lg-4">
            <h1 class="mb-3 text-center">Please LogIn</h1>
            <Formik initialValues={loginform} onSubmit={formSubmit}>
              {({ values, handleChange, handleSubmit }) => (
                <form onSubmit={handleSubmit} class="mb-3">
                  <div class="form-group">
                    <label for="email"></label>
                    <input
                      type="email"
                      class="form-control"
                      placeholder="example@gmail.com"
                      id="email"
                      onChange={handleChange}
                      value={values.email}
                      required
                    />
                  </div>

                  <div class="form-group">
                    <label for="password"></label>
                    <input
                      type="password"
                      class="form-control"
                      id="password"
                      placeholder="password"
                      onChange={handleChange}
                      value={values.password}
                      required
                    />
                  </div>
                  <label></label>
                  <button type="submit" class="btn btn-primary btn-block">
                    Login
                  </button>
                </form>
              )}
            </Formik>

            <div class="text-center">
              <p>or..</p>
              <a href="./signup" class="btn btn-success">
                Create account
              </a>
              <p class="small">
                <a href="./signup">Not Register? Register Now</a>
              </p>
            </div>
          </div>
        </div>

        {/* <img
          src="https://manikarthik.com/wp-content/uploads/2020/11/MK_Blogging_Laptop.png"
          class="src"
        ></img> */}
      </div>
    </div>
  );
};
>>>>>>> c725d8fd69839e2752ba789628a38e8e07726494
export default Login;