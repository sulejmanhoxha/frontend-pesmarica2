import { useContext } from "react";
import Card from "../components/Card";

import bijelo_dugme from "../images/bijelo-dugme.jpeg";
import aca_lukas from "../images/aca-lukas.jpg";
import aco_pejovic from "../images/aco-pejovic.jpg";
import dino_merlin from "../images/dino-merlin.jpg";
import divlje_jagode from "../images/divlje-jagode.jpg";
import halid_besic from "../images/halid-besic.jpeg";
import parni_valjak from "../images/parni-valjak.jpg";
import riblja_corba from "../images/riblja-corba.jpg";
import sinan_sakic from "../images/sinan-sakic.jpeg";
import Hero from "../components/Hero";
import List from "../components/LatestSongsList";

const Home = () => {
	const artists = [
		{ image: bijelo_dugme, title: "Bijelo Dugme" },
		{ image: aca_lukas, title: "Aca Lukas" },
		{ image: aco_pejovic, title: "Aco Pejović" },
		{ image: dino_merlin, title: "Dino Merlin" },
		{ image: divlje_jagode, title: "Divlje Jagode" },
		{ image: halid_besic, title: "Halid Bešlić" },
		{ image: parni_valjak, title: "Parni Valjak" },
		{ image: riblja_corba, title: "Riblja Čorba" },
		{ image: sinan_sakic, title: "Sinan Sakić" },
	];

	return (
		<>
			<Hero />

			<div className="container mx-auto mb-16">
				<div className="grid grid-cols-1 gap-4 lg:grid-cols-4">
					<main className="grid grid-cols-1  justify-center gap-6 md:grid-cols-2 lg:col-span-3 lg:grid-cols-3">
						{artists.map((artist) => (
							<Card
								key={artist.title}
								image={artist.image}
								title={artist.title}
							/>
						))}
					</main>
					<aside className="lg:col-span-1">
						<List />
					</aside>
				</div>
			</div>
		</>
	);
};

export default Home;
