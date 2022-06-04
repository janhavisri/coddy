
//import { Book } from "@mui/icons-material";
import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar";
import Navbar from "./navbar";
//import Footer from "./footer";
import Header from "./header";

const Admin = () => {

  const options = [
    
    {
      name : 'Add Platform',
      link : '/admin/addPlatform'
    },
    {
      name : 'Add Category',
      link : '/admin/addCategory'
    },
  
    {
      name : 'Manage platform',
      link : '/admin/managePlatform'
    },
    {
      name : 'Manage User',
      link : '/admin/manageUser'
    },
    
  ]



  return (
    <>
<<<<<<< HEAD
    <Header></Header>
      {/* <Sidebar sidebarOptions={options} title={'Admin Dashboard'} > */}
      <Outlet />
    {/* </Sidebar> */}
=======
    <Navbar></Navbar>
      <Sidebar sidebarOptions={options} title={'Admin Dashboard'} >
    </Sidebar>
    <Outlet />
>>>>>>> c725d8fd69839e2752ba789628a38e8e07726494
      
    </>
  );
};

export default Admin;