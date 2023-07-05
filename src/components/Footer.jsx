import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<footer className="mx-auto max-w-screen-xl bg-white px-4 py-5 text-gray-500 md:px-8">
			<div className="max-w-lg sm:mx-auto sm:text-center">
				<h2 className="w-32 bg-transparent text-2xl font-bold uppercase text-black sm:mx-auto">
					Guitarists
				</h2>
				<p className="mt-2 text-[15px] leading-relaxed">
					Lorem Ipsum has been the industrys standard dummy text ever
					since the 1500s, when an unknown printer took a galley of
					type and scrambled it to make a type specimen book.
				</p>
			</div>
			<ul className="mt-8 items-center justify-center space-y-5 sm:flex sm:space-x-4 sm:space-y-0">
				<li key={1} className=" hover:text-gray-800">
					<Link to="/">Home</Link>
				</li>
				<li key={2} className=" hover:text-gray-800">
					<Link to="/artists">Artists</Link>
				</li>
				<li key={3} className=" hover:text-gray-800">
					<Link to="/songs">Songs</Link>
				</li>
				<li key={4} className=" hover:text-gray-800">
					<Link to="/about">About</Link>
				</li>
			</ul>
		</footer>
	);
};

export default Footer;
