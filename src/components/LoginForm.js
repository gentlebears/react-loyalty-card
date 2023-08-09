import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
export default function LoginForm({ handleSubmit, noEmail = false }) {
	const [email, setEmail] = useState(noEmail ? true : "");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();

	const handle = (e) => {
		handleSubmit(e, email, password);
	};
	const user = localStorage.getItem("user");
	useEffect(() => {
		if (user) navigate("/");
	});

	// const [token, setToken] = useState(localStorage.getItem('token'));
	// const user = localStorage.getItem('token');
	// if (user) {
	// 	console.log('xUser: ' + user);
	return (
		<motion.div
			initial={{ opacity: 0, translateY: 25 }}
			animate={{ opacity: 1, translateY: 0 }}
			className="px-5 dark:text-gray-300 transition-all duration-200 ease-in h-[90vh]"
		>
			<form
				className="max-w-xl h-screen2 content-center self-center items-center mx-auto grid gap-y-px py-4 "
				onSubmit={handle}
			>
				<div className="p-10 rounded-3xl shadow-[0px_0px_5px_rgba(109,56,19,0.9)] transition-all duration-200 ease-in">
					{!noEmail && (
						<>
							<h1 className="text-xl font-bold mb-4">
								Giriş Yap
							</h1>
							<div>
								<label className="block text-sm font-medium text-toy1 dark:text-loy1text transition-all duration-200 ease-in">
									E-Mail
								</label>
								<div className="mt-1">
									<input
										type="email"
										name="email"
										className="shadow-sm focus:ring-loy1 bg-orange-50 dark:bg-slate-100 dark:text-slate-900 focus:border-loy1 block w-full sm:text-sm border-loy2 rounded-md"
										placeholder="you@example.com"
										value={email}
										onChange={(e) =>
											setEmail(e.target.value)
										}
									/>
								</div>
							</div>
						</>
					)}
					<div>
						<label className="block text-sm font-medium text-toy1 dark:text-loy1text transition-all duration-200 ease-in">
							Password
						</label>
						<div className="mt-1">
							<input
								type="password"
								autoComplete="on"
								className="shadow-sm focus:ring-loy1 bg-orange-50 dark:bg-slate-100 dark:text-slate-900 focus:border-loy1 block w-full sm:text-sm border-loy2 rounded-md"
								placeholder="Password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
							/>
						</div>
					</div>

					<div>
						<Link
							to="/forgot-password"
							className="block text-sm font-medium text-toy1 dark:text-loy1text transition-all duration-200 ease-in"
						>
							Şifreni mi Unuttun?
						</Link>
					</div>

					<div className="">
						<button
							type="submit"
							disabled={!email || !password}
							className="inline-flex disabled:opacity-60 cursor-pointer items-center my-3 px-4 py-2 border-2 border-transparent text-sm border-loy1  rounded-md shadow-sm text-white bg-loy1 hover:text-loy1 hover:bg-white hover:border-loy1 focus:outline-none focus-ring-2  focus ring-offset-2 focus:ring-orange-500 transition-colors"
						>
							Giriş Yap
						</button>
					</div>
				</div>
			</form>
		</motion.div>
	);
}
// 	else {
// 		console.log('yUser: ' + user);

// 	}
// }

// navigate('/');
// console.log('Test');
