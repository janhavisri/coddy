import '../../stylesheets/login.css';
import app_config from "../../config";
import Swal from 'sweetalert2';
import { Formik } from 'formik';
import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';

const Login=()=>{
   // const [signupOpen,setOpenSignup] =useState(false);
 


 const url = app_config.api_url;
 const navigate = useNavigate();
 
 

 const loginform = {
     email: '',
     password: ''
 }
 const formSubmit = (values) => {

    fetch(url + 'admin/getbyemail/' + values.email)
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
                    if(data.isAdmin){
                       navigate('/admin')
                   }else{
                        navigate('/admin')

                    }

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
     
<div class="login-box">
  <h2>Login</h2>
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

                         <button type="submit" className="mt-5 btn btn-primary w-100 "href="/admin/manageplatform">Login Now</button>
    </form>
    )}


    </Formik>

</div>
)
}

export default Login;