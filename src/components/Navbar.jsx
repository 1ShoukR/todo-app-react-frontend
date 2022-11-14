import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<div>
			<nav className="navbar navbar-inverse navbar-fixed-top">
				<div className="collapse navbar-collapse" id="myNavbar">
					<ul className="nav navbar-nav">
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/create_account">create Account</Link>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
	
};

export default Navbar;
