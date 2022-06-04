import { BrowserRouter, Routes, Route, Navigate, useParams} from "react-router-dom";
import "./App.css";
import Main from "./components/main";
import Login from "./components/main/login";
import Home from "./components/main/home";
import Signup from "./components/main/signup";
import Admin from "./components/admin";
import Dashboard from "./components/admin/dashboard";
import Profile from "./components/admin/profile";
import ManageUser from "./components/admin/manageuser";
import Chart from "./components/admin/chart";



function App() {
  
  

  return (
    
    <BrowserRouter>
 
      <Routes>
        <Route element={<Main />} path="main">
        <Route element={<Home />} path="home" />
        <Route element={<Login />} path="login" />
         <Route element={<Signup />} path="signup" />
        </Route>
        
        <Route element={<Admin />} path="admin">
          <Route element={<Dashboard />} path="dashboard" />
          <Route element={<Profile />} path="profile" />
          <Route element={<Chart />} path="chart" />
          <Route element={<ManageUser />} path="manageuser" />
          
          <Route element={<Main />} path="main">
            <Route element={<Signup />} path="signup" />
            <Route element={<Login />} path="login" />
            {/* <Route element={<Header />} path="header" /> */}
            <Route element={<Home />} path="home" />
            <Route element={<Footer />} path="footer" />
            <Route element={<AddReview />} path="addreview" />
            <Route element={<Compare />} path="compare" />
            {/* <Route element={<UserDashboard />} path="userdashboard" /> */}
            <Route element={<BrowsePlatform/>} path="browseplatform" />
            <Route element={<BrowseCompare/>} path="browsecompare" />
            <Route element={<BrowseReview/>} path="browsereview" />
            <Route element={<PlatformDetail/>} path="platformdetail/:id" />
            <Route element={<CategoryDetail/>} path="categorydetail/:id" />
            <Route element={<Comparison/>} path="comparison" />
 
        </Route>


        
        
        <Route element={<Navigate to="/main/signup" />} path="/" />
      </Routes>
    </BrowserRouter>
    
    
     
      

         
  );
}

export default App;