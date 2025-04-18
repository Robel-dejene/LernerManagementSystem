// import React from "react";
// import "./Header.css";

// const Header = () => {
// 	return (
// 		<header className="custom-header">
// 			<div className="logo">EduLearn</div>
// 			<nav className="nav-links">
// 				<a href="#">Home</a>
// 				<a href="#">Courses</a>
// 				<button className="login-btn">Login</button>
// 				<button className="signup-btn">Sign up</button>
// 			</nav>
// 		</header>
// 	);
// };
import React from "react";
import "./Header.css"; // for custom styles
import logo from "../../../assets/images/Header/Azubi-Logo.png"
import client from "../../../assets/images/Header/CLient.png"


const Header = () => {
	return (
		<header className="header-container">
			<div className="logo-area">
                <img src={logo} alt="" />
                <img src={client} alt="" />
			</div>
			<nav className="nav-links">
				<a href="#">Home</a>
				<a href="#">Courses</a>
			</nav>
			<div className="auth-buttons">
				<button className="login-btn">
					Login <span className="arrow">→</span>
				</button>
				<button className="signup-btn">
					sign up <span className="arrow">→</span>
				</button>
			</div>
		</header>
	);
};

export default Header;
