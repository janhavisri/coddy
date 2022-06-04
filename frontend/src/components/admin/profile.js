import React from "react";
import "../../stylesheets/profile.css";
import {NavLink} from "react-router-dom"
const Profile = () => {
  return (
<div id="cont">
<div className="container">

	<div className="row" id="main">
        <div className="col-md-4 well" id="leftPanel">
            <div className="row">
                <div className="col-md-12">
                	<div>
        				<img src="https://tse3.mm.bing.net/th?id=OIP.y8yjo0Va9Bhs98glEtla9QHaFE&pid=Api&P=0&w=249&h=170" alt="Texto Alternativo" className="img-circle img-thumbnail"/>
        				<h2>Gopinath Perumal</h2>
        				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        				tempor incididunt ut labore et dolore magna aliqua.</p>
                        <div className="btn-group">
                            <button type="button" className="btn btn-warning">
                                Social</button>
                            <button type="button" className="btn btn-warning dropdown-toggle" data-toggle="dropdown">
                                <span className="caret"></span><span className="sr-only">Social</span>
                            </button>
                            <ul className="dropdown-menu" role="menu">
                                <li><NavLink to="#">Twitter</NavLink></li>
                                <li><NavLink to="https://plus.google.com/+Jquery2dotnet/posts">Google +</NavLink></li>
                                <li><NavLink to="https://www.facebook.com/jquery2dotnet">Facebook</NavLink></li>
                                <li className="divider"></li>
                                <li><NavLink to="#">Github</NavLink></li>
                            </ul>
                        </div>
        			</div>
        		</div>
            </div>
        </div>
        <div className="col-md-8 well" id="rightPanel">
            <div className="row">
    <div className="col-md-12">
    	<form role="form">
			<h2>Edit your profile.<small>It's always easy</small></h2>
			<hr className="colorgraph"/>
			<div className="row">
				<div className="col-xs-12 col-sm-6 col-md-6">
					<div className="form-group">
          <label></label>
                        <input type="text" name="first_name" id="first_name" className="form-control input-lg" placeholder="First Name" tabindex="1"/>
					</div>
				</div>
				<div className="col-xs-12 col-sm-6 col-md-6">
					<div className="form-group">
          <label></label>
						<input type="text" name="last_name" id="last_name" className="form-control input-lg" placeholder="Last Name" tabindex="2"/>
					</div>
				</div>
			</div>
			<div className="form-group">
      <label></label>
				<input type="email" name="email" id="email" className="form-control input-lg" placeholder="Email Address" tabindex="4"/>
			</div>
			<div className="row">
				<div className="col-xs-12 col-sm-6 col-md-6">
					<div className="form-group">
          <label></label>
						<input type="password" name="password" id="password" className="form-control input-lg" placeholder="Password" tabindex="5"/>
					</div>
				</div>
				<div className="col-xs-12 col-sm-6 col-md-6">
					<div className="form-group">
          <label></label>
						<input type="password" name="password_confirmation" id="password_confirmation" className="form-control input-lg" placeholder="Confirm Password" tabindex="6"/>
					</div>
				</div>
			</div>
			<hr className="colorgraph"/>
			<div className="row">
				<div className="col-xs-12 col-md-6"></div>
				<div className="col-xs-12 col-md-6"><NavLink to="#" className="btn btn-success btn-block btn-lg">Save</NavLink></div>
			</div>
		</form>
	</div>
</div>

<div className="modal fade" id="t_and_c_m" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
	<div className="modal-dialog modal-lg">
		<div className="modal-content">
			<div className="modal-header">
				<button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
				<h4 className="modal-title" id="myModalLabel">Terms & Conditions</h4>
			</div>
			<div className="modal-body">
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, itaque, modi, aliquam nostrum at sapiente consequuntur natus odio reiciendis perferendis rem nisi tempore possimus ipsa porro delectus quidem dolorem ad.</p>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, itaque, modi, aliquam nostrum at sapiente consequuntur natus odio reiciendis perferendis rem nisi tempore possimus ipsa porro delectus quidem dolorem ad.</p>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, itaque, modi, aliquam nostrum at sapiente consequuntur natus odio reiciendis perferendis rem nisi tempore possimus ipsa porro delectus quidem dolorem ad.</p>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, itaque, modi, aliquam nostrum at sapiente consequuntur natus odio reiciendis perferendis rem nisi tempore possimus ipsa porro delectus quidem dolorem ad.</p>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, itaque, modi, aliquam nostrum at sapiente consequuntur natus odio reiciendis perferendis rem nisi tempore possimus ipsa porro delectus quidem dolorem ad.</p>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, itaque, modi, aliquam nostrum at sapiente consequuntur natus odio reiciendis perferendis rem nisi tempore possimus ipsa porro delectus quidem dolorem ad.</p>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, itaque, modi, aliquam nostrum at sapiente consequuntur natus odio reiciendis perferendis rem nisi tempore possimus ipsa porro delectus quidem dolorem ad.</p>
			</div>
			<div className="modal-footer">
				<button type="button" className="btn btn-primary" data-dismiss="modal">I Agree</button>
			</div>
		</div>
	</div>
</div>
</div></div>
        </div>
     </div>       

    

  )
};

export default Profile;
