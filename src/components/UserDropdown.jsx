import React, { useContext, useEffect, useRef, useState } from "react";
import DataContext from "../context/DataContext";

const AvatarDropdown = () => {
	const { user } = useContext(DataContext);
	const [state, setState] = useState(false);
	const profileRef = useRef();

	const navigation = [
		{ title: "Profile", path: "javascript:void(0)" },
		{ title: "Add Songs", path: "javascript:void(0)" },
	];

	useEffect(() => {
		const handleDropDown = (e) => {
			if (!profileRef.current.contains(e.target)) setState(false);
		};
		document.addEventListener("click", handleDropDown);
		return () => {
			document.removeEventListener("click", handleDropDown);
		};
	}, []);

	return (
		<div className="relative">
			<button
				ref={profileRef}
				className="h-10 w-10 rounded-full text-slate-900 outline-none ring-gray-200 ring-offset-2"
				onClick={() => setState(!state)}
			>
				{user.username}
			</button>
			<ul
				className={`absolute mt-2 space-y-2 rounded-md border bg-white shadow-md md:-right-5 md:top-10 ${
					state ? "" : "hidden"
				}`}
			>
				{navigation.map((item, idx) => (
					<li key={idx}>
						<a
							className="block whitespace-nowrap  px-4 py-2 text-gray-600 hover:bg-slate-100 hover:text-gray-900"
							href={item.path}
						>
							{item.title}
						</a>
					</li>
				))}
				<button className="block w-full border-t px-4 py-2 text-left text-gray-600 hover:bg-red-300 hover:text-gray-900">
					Logout
				</button>
			</ul>
		</div>
	);
};

export default AvatarDropdown;
