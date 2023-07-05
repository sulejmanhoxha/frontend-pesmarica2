import { useContext } from "react";
import { Link } from "react-router-dom";
import DataContext from "../context/DataContext";

const Artists = () => {
	const { artists } = useContext(DataContext);

	return (
		<div className="container mx-auto mt-8">
			<ul>
				{artists.map((artist) => (
					<li
						key={artist.id}
						className="mb-5 rounded-lg bg-slate-100 p-4 text-lg capitalize"
					>
						<Link to={`${artist.id}`}>{artist.name}</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Artists;
