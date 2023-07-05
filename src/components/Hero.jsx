import React from "react";

const Hero = () => {
	return (
		<section>
			<div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:px-12 lg:px-24 lg:py-24">
				<div className="mb-12 flex w-full flex-col text-center">
					<div className="mx-auto mb-5 inline-flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-full bg-gray-50 text-blue-600">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="icon icon-tabler icon-tabler-aperture h-10 w-10"
							width={24}
							height={24}
							viewBox="0 0 24 24"
							strokeWidth="1.5"
							stroke="currentColor"
							fill="none"
							strokeLinecap="round"
							strokeLinejoin="round"
						>
							<path stroke="none" d="M0 0h24v24H0z" fill="none" />
							<circle cx={12} cy={12} r={9} />
							<line x1="3.6" y1={15} x2="14.15" y2={15} />
							<line
								x1="3.6"
								y1={15}
								x2="14.15"
								y2={15}
								transform="rotate(72 12 12)"
							/>
							<line
								x1="3.6"
								y1={15}
								x2="14.15"
								y2={15}
								transform="rotate(144 12 12)"
							/>
							<line
								x1="3.6"
								y1={15}
								x2="14.15"
								y2={15}
								transform="rotate(216 12 12)"
							/>
							<line
								x1="3.6"
								y1={15}
								x2="14.15"
								y2={15}
								transform="rotate(288 12 12)"
							/>
						</svg>
					</div>
					<h1 className="max-w-5xl text-2xl font-bold leading-none tracking-tighter text-neutral-600 md:text-5xl lg:max-w-7xl lg:text-6xl">
						Long headline to turn <br className="hidden lg:block" />
						your visitors into users
					</h1>
					<p className="mx-auto mt-8 max-w-xl text-center text-base leading-relaxed text-gray-500">
						Free and Premium themes, UI Kit's, templates and landing
						pages built with Tailwind CSS, HTML &amp; Next.js.
					</p>
					<a
						className="mx-auto mt-8 text-sm font-semibold text-blue-600 hover:text-neutral-600"
						title="read more"
					>
						{" "}
						Read more about the offer »{" "}
					</a>
				</div>
			</div>
		</section>
	);
};

export default Hero;
