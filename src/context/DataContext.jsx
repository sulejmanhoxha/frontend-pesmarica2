import { createContext, useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

import api from "../api/pesmarica.js";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
	const [latestSongs, setLatestSongs] = useState([]);
	const [artists, setArtists] = useState([]);

	useEffect(() => {
		const fetchLatestSongs = async () => {
			try {
				const response = await api.get(
					"/api/songs/?ordering=-created_at"
				);

				const responseData = response.data;
				setLatestSongs(responseData.results);
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

		const fetchArtists = async () => {
			try {
				const response = await api.get("/api/artists/");
				const responseData = response.data;
				setArtists(responseData.results);
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
		fetchLatestSongs();
		fetchArtists();
	}, []);

	return (
		<DataContext.Provider
			value={{
				latestSongs,
				setLatestSongs,
				artists,
				setArtists,
			}}
		>
			{children}
		</DataContext.Provider>
	);
};

export default DataContext;
