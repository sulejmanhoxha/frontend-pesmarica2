import { Link } from "react-router-dom";

const Hero = () => {
	return (
		<section>
			<div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:px-12 lg:px-24 lg:py-24">
				<div className="mb-12 flex w-full flex-col text-center">
					<div className="mx-auto mb-5 inline-flex h-60 w-60 flex-shrink-0 items-center justify-center rounded-full bg-gray-50 text-blue-600">
						<svg
							viewBox="0 0 64 64"
							xmlns="http://www.w3.org/2000/svg"
							aria-hidden="true"
							className="icon icon-tabler icon-tabler-aperture h-30 w-30"
						>
							<circle cx={17.067} cy={56.547} r={1.844} />

							<path d="M24.759 44.225l-4.987-4.982 2.443-2.445L27.2 41.78zM14.988 44.026l2.444-2.443 4.983 4.984-2.444 2.444zM13.423 46.813l3.86 3.86-1.393 1.393-3.86-3.86zM20.935 52.026a2.306 2.306 0 103.262 0c-.901-.9-2.361-.9-3.262 0" />
							<path d="M59.897 12.03l-.496-.495c3.267-3.104 3.558-3.941.281-7.216-3.277-3.28-4.115-2.986-7.218.28l-.494-.495c.433-.53.614-1.058.135-1.537-.59-.589-1.25-.19-1.903.463-.652.652-1.049 1.311-.461 1.898.48.479 1.006.301 1.537-.132l.516.516c-.753.803-1.628 1.742-2.678 2.821l-.588-.588c.434-.531.611-1.057.134-1.537-.589-.586-1.249-.191-1.899.459-.654.654-1.051 1.313-.461 1.902.479.479 1.006.298 1.537-.136l.595.595c-.115.116-.218.223-.337.342-.916.916-1.708 1.713-2.391 2.433l-.617-.618c.432-.531.611-1.057.131-1.535-.588-.588-1.248-.193-1.898.459-.652.654-1.051 1.313-.461 1.9.48.48 1.006.302 1.537-.132l.643.645c-1.969 2.182-2.646 3.573-1.898 5.143L30.276 29.606c-1.586-1.542-3.384-2.817-6.171-2.604-6.663.504-2.295 8.092-10.83 8.66-3.052.201-5.95.871-8.046 2.972-5.33 5.328-3.626 12.642 1.934 18.204 5.559 5.56 12.874 7.261 18.203 1.934 2.779-2.777 2.686-7.816 3.615-10.827 1.199-3.891 7.463-2.574 7.176-6.902-.025-.408-.125-.666-.281-.82-.779-.779-2.963 1.078-4.276-.236-.412-.41-.736-1.135-.906-2.34L46.535 20.86c1.57.749 2.963.07 5.146-1.899l.643.643c-.434.532-.611 1.059-.135 1.539.588.588 1.25.191 1.902-.463.652-.65 1.049-1.311.459-1.9-.479-.478-1.005-.298-1.536.135l-.617-.616c.721-.683 1.517-1.475 2.433-2.392.119-.119.227-.221.344-.337l.591.594c-.433.532-.612 1.058-.131 1.538.588.588 1.247.191 1.899-.461.648-.652 1.047-1.313.459-1.9-.478-.479-1.004-.3-1.535.132l-.587-.587c1.078-1.051 2.017-1.926 2.819-2.677l.517.515c-.435.531-.612 1.058-.132 1.537.588.586 1.247.191 1.898-.462.654-.652 1.05-1.313.462-1.9-.48-.481-1.006-.301-1.537.131m-27.67 30.605c-.09.039-.182.076-.281.117-1.775.73-4.211 1.729-5.078 4.541-.318 1.027-.516 2.166-.725 3.375-.412 2.382-.881 5.081-2.339 6.54-2.039 2.039-4.439 2.875-7.139 2.49-2.643-.375-5.464-1.945-7.941-4.424-2.478-2.477-4.048-5.296-4.422-7.938-.386-2.699.453-5.1 2.489-7.139 1.398-1.398 3.443-2.117 6.631-2.329 5.936-.393 7.287-3.85 8.181-6.137.698-1.789.934-2.393 2.671-2.525 1.807-.137 3.018.598 4.394 1.918l-4.325 4.082 4.452 4.454.08-.085c.272.814.653 1.467 1.162 1.976a3.713 3.713 0 002.19 1.084m15.546-28.209a1.283 1.283 0 11-1.813-1.816 1.283 1.283 0 011.813 1.816m1.643-5.273c.502-.5 1.314-.5 1.817 0a1.286 1.286 0 01-.002 1.814c-.503.502-1.315.5-1.813 0a1.279 1.279 0 01-.002-1.814m1.987 8.9a1.286 1.286 0 01-1.817-1.816c.504-.5 1.315-.5 1.817.002a1.28 1.28 0 010 1.814m1.469-12.355a1.28 1.28 0 011.814.002 1.283 1.283 0 11-1.814-.002m1.986 8.898a1.284 1.284 0 01-1.815-1.815c.5-.498 1.313-.5 1.816 0a1.285 1.285 0 01-.001 1.815m3.455-3.456A1.28 1.28 0 1156.5 9.328c.5-.504 1.313-.502 1.814 0s.503 1.31-.001 1.812" />
						</svg>
					</div>
					<h1 className="max-w-5xl text-2xl font-bold leading-none tracking-tighter text-neutral-600 md:text-5xl lg:max-w-7xl lg:text-6xl">
						Discover and Play
						<br className="hidden lg:block" />
						Song Chords and Lyrics
					</h1>
					<p className="mx-auto mt-8 max-w-xl text-center text-base leading-relaxed text-gray-500">
						Explore a vast collection of songs and their guitar
						chords and lyrics. Learn how to play your favorite songs
						on the guitar.
					</p>
					<Link
						to="songs/"
						className="mx-auto mt-8 text-sm font-semibold text-blue-600 hover:text-neutral-600"
						title="read more"
					>
						Find your favorite song »
					</Link>
				</div>
			</div>
		</section>
	);
};

export default Hero;
