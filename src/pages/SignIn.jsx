import { Link } from "react-router-dom";

const SignIn = () => {
	return (
		<section className="container mx-auto">
			<div className="flex flex-1 flex-col justify-center overflow-hidden px-4 py-12 sm:px-6  xl:px-24">
				<div className="mx-auto w-full max-w-xl ">
					<div>
						<Link to="/" className="text-medium text-blue-600">
							guitarists
						</Link>
						<h2 className="mt-6 text-3xl font-extrabold text-neutral-600">
							Sign in.
						</h2>
					</div>
					<div className="mt-8">
						<div className="mt-6">
							<form
								action="#"
								method="POST"
								className="space-y-6"
								data-bitwarden-watching={1}
							>
								<div className="grid grid-cols-1 gap-2  md:grid-cols-2">
									<div>
										<label
											htmlFor="username"
											className="block text-sm font-medium text-neutral-600"
										>
											Username
										</label>
										<div className="mt-1">
											<input
												id="username"
												name="username"
												type="text"
												autoComplete="username"
												required
												placeholder="Your Username"
												className="block w-full transform rounded-lg border border-transparent bg-gray-50 px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out focus:border-transparent focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
											/>
										</div>
									</div>
									<div className="space-y-1">
										<label
											htmlFor="password"
											className="block text-sm font-medium text-neutral-600"
										>
											Password
										</label>
										<div className="mt-1">
											<input
												id="password"
												name="password"
												type="password"
												autoComplete="current-password"
												required=""
												placeholder="Your Password"
												className="block w-full transform rounded-lg border border-transparent bg-gray-50 px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out focus:border-transparent focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
											/>
										</div>
									</div>
								</div>
								<div>
									<label
										htmlFor="email"
										className="block text-sm font-medium text-neutral-600"
									>
										Email address
									</label>
									<div className="mt-1">
										<input
											id="email"
											name="email"
											type="email"
											autoComplete="email"
											required=""
											placeholder="Your Email"
											className="block w-full transform rounded-lg border border-transparent bg-gray-50 px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out focus:border-transparent focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
										/>
									</div>
								</div>
								<div>
									<button
										type="submit"
										className="flex w-full transform items-center justify-center rounded-xl bg-blue-600 px-10 py-4 text-center text-base font-medium text-white transition duration-500 ease-in-out hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
									>
										Sign in
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default SignIn;
