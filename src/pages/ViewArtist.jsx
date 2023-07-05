import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import api from "../api/pesmarica.js";

const ViewArtist = () => {
	const { id } = useParams();
	const [artist, setArtist] = useState("");
	const [artistSongs, setArtistSongs] = useState("");
	const [artistName, setArtistName] = useState("");
	const [artistID, setArtistID] = useState("");

	useEffect(() => {
		const fetchSong = async () => {
			try {
				const response = await api.get(`/api/artists/${id}/songs/`);
				setArtistSongs(response.data);
				setArtistName(response.data.artist.name);
			} catch (err) {
				if (err.response) {
					console.log(err.response.data);
					console.log(err.response.status);
					console.log(err.response.headers);
				} else {
					console.log(`Error: ${err.message}`);
				}
			}
		};
		fetchSong();
	}, [id]);

	return (
		<>
			<div className="container mx-auto  ">
				<div className="mb-4 grid grid-cols-4 items-center gap-4 rounded-lg bg-slate-100 p-5">
					<p className="col-span-1 text-lg font-bold">Artist</p>
					<Link
						to={`/artists/${artistID}`}
						className="col-span-3 underline underline-offset-4 hover:text-indigo-600"
					>
						{artistName}
					</Link>
				</div>

				<div className="mb-4 grid grid-cols-4 items-center gap-4 rounded-lg bg-slate-100 p-5 ">
					<p className="col-span-1 text-lg font-bold">Song name</p>
					<p className="col-span-3"> {song.title}</p>
				</div>

				<div className="mb-4 grid grid-cols-4 items-center gap-4 rounded-lg bg-slate-100 p-5 ">
					<p className="col-span-1 text-lg font-bold">
						Year of release
					</p>
					<p className="col-span-3"> {song.year}</p>
				</div>

				<div className="mb-4 grid grid-cols-4 items-center gap-4 rounded-lg bg-slate-100 p-5 ">
					<p className="col-span-1 text-lg font-bold">User</p>
					<p className="col-span-3"> {song.owner}</p>
				</div>

				<div className="mb-4 grid grid-cols-4 items-center gap-4 rounded-lg bg-slate-100 p-5 ">
					<p className="col-span-1 text-lg font-bold">Date created</p>
					<p className="col-span-3"> {song.created_at}</p>
				</div>

				<div className="mb-4 gap-8 rounded-lg bg-slate-100 p-5 ">
					<p className="mb-6 text-lg font-bold">Lyrics</p>
					<pre className="font-mono">{song.lyrics}</pre>
				</div>
			</div>
		</>
	);
};

export default ViewArtist;
