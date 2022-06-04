import React from 'react';
import {NavLink} from "react-router-dom";
const Sidebar = () => {
    return (
         <div className="col-md-3 col-lg-2 sidebar-offcanvas pl-0" id="sidebar" role="navigation" style={{backgroundColor:"#f9f8f6"}}>
            <ul className="nav flex-column sticky-top pl-0 pt-6 p-4 mt-1 ">
                <li className="nav-item mb-3 mt-3"><NavLink className="nav-link text-secondary" to="/admin/chart"><h5>Jacob Nejam</h5></NavLink></li>
                <li className="nav-item mb-2 "><NavLink className="nav-link text-secondary" to="/admin/profile"><i className="fas fa-user font-weight-bold"></i> <span className="ml-3">Overview</span></NavLink></li>
                <li className="nav-item mb-2">
                    <NavLink className="nav-link text-secondary" to="/admin/manageuser" data-toggle="collapse" data-target="#submenu1"><i className="far fa-file-word font-weight-bold"></i> <span className="ml-3"> Manage User</span></NavLink>
                    <ul className="list-unstyled flex-column pl-3 collapse" id="submenu1" aria-expanded="false">
                       <li className="nav-item mb-2 "><NavLink className="nav-link text-secondary" to=""><i className="fas fa-book-reader"></i> Data Report </NavLink></li>
                       <li className="nav-item mb-2 "><NavLink className="nav-link text-secondary" to=""> <i className="fas fa-book-medical"></i> File Report </NavLink></li>
                    </ul>
                </li>
                <li className="nav-item mb-2"><NavLink className="nav-link text-secondary" to="#"><i className="far fa-chart-bar font-weight-bold"></i> <span className="ml-3">Analytics</span></NavLink></li>
                <li className="nav-item mb-2"><NavLink className="nav-link text-secondary" to="#"><i className="fas fa-file-export font-weight-bold"></i><span className="ml-3">Export</span></NavLink></li>
                <li className="nav-item mb-2"><NavLink className="nav-link text-secondary" to="#"><i className="fas fa-tablet-alt font-weight-bold"></i><span className="ml-3">Snippets</span></NavLink></li>
                <li className="nav-item mb-2"><NavLink className="nav-link text-secondary" to="#"><i className="fas fa-atom font-weight-bold"></i> <span className="ml-3">Flex</span></NavLink></li>
                <li className="nav-item mb-2"><NavLink className="nav-link text-secondary" to="#"><i className="far fa-folder font-weight-bold"></i> <span className="ml-3">Layouts</span></NavLink></li>
                <li className="nav-item mb-2"><NavLink className="nav-link text-secondary" to="#">Templates</NavLink></li>
                <li className="nav-item mb-2"><NavLink className="nav-link text-secondary" to="#">Themes</NavLink></li>
            </ul>
       </div>
    )
}
 
export default Sidebar