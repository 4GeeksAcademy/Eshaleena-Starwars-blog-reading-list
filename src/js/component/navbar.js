import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlP_CQFHCMgRWYX4tYGGnTzAw7mprvYrvbq0IVoCsuEA&s" alt="Star Wars logo" /></span>
			</Link>
			<div className="ml-auto">

			</div>
		</nav>
	);
};
