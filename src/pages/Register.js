import { register, auth, providerGoogle } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
// import { auth } from '../firebase';

export default function Register() {
	const navigate = useNavigate();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [googleValue, setGoogleValue] = useState("");

	const handleClickGoogle = (e) => {
		signInWithPopup(auth, providerGoogle).then((data) => {
			setGoogleValue(data.user.email);
			localStorage.setItem("email", data.user.email);
			navigate("/login");
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		// const { user } = await register(email, password);
		await register(email, password);
	};

	const hideshow = localStorage.getItem("user");
	useEffect(() => {
		if (hideshow) navigate("/profile");
	});

	useEffect(() => {
		setGoogleValue(localStorage.getItem("email"));
	});

	if (!hideshow) {
		// console.log(auth.emulatorConfig);
		// console.log(authUser);
		return (
			<motion.div
				initial={{ opacity: 0, translateY: 25 }}
				animate={{ opacity: 1, translateY: 0 }}
				className="max-w-7xl my-auto mx-auto px-5"
			>
				<div className="w-full h-screen2 flex justify-center items-center">
					{/* BANNER */}
					<div className="flex items-center h-cheight w-cspacing rounded-3xl shadow-[0px_0px_5px_rgba(109,56,19,0.9)]">
						{/* 1 Div */}
						<div className="hidden bg-web-theme-color dark:bg-web-theme-color3 text-orange-50 xl:flex lg:flex md:flex sm:flex flex-col justify-center items-center w-2/5 h-full rounded-l-3xl py-2 px-5 shadow-[0px_0px_5px_0px_0px_5px_rgba(96,56,19,0.9)]">
							<h2 className="text-center mb-7 mx-1 text-3xl font-bold md:text-3xl lg:text-5xl">
								Zaten Bir Hesabınız Var mı?
							</h2>
							<p className="text-center mb-11 mx-4 text-sm font-normal md:text-base lg:text-2xl">
								Oturumunuzu açın ve çok sayıda yeni fırsatı
								keşfedin!
							</p>
							<button
								name="loginaccount"
								type="submit"
								className="inline-flex disabled:opacity-60 cursor-pointer items-center px-4 py-2 border-2 text-sm font-medium rounded-md shadow-sm text-loy1 bg-white hover:bg-loy1 hover:border-white hover:text-white focus:outline-none focus-ring-2 focus ring-offset-2 focus:bg-orange-900 transition-colors border-loy1 "
								onClick={(e) => {
									e.preventDefault();
									navigate("/login");
								}}
							>
								Giriş Yap
							</button>
						</div>

						{/* FORM */}
						{/* <form className='max-w-xl mx-auto grid gap-y-4 py-4' onSubmit={handleSubmit}> */}
						{/* 2 Div */}
						<div className="flex flex-col justify-center items-center h-full w-full xl:w-3/5 lg:w-3/5 md:w-3/5 sm:w-3/5 rounded-r-3xl px-5 py-0 text-loy1">
							<form id="form" name="form" onSubmit={handleSubmit}>
								<h2 className="text-center font-bold text-4xl lg:text-5xl md:text-3xl lg:font-extrabold dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r from-loy1 to-[#5a4d43]">
									Hesap Oluşturun
								</h2>
								{/* SOCIAL BUTTONS */}
								<div className="flex flex-col justify-center items-center mt-8 md:mt-2 lg:mt-2">
									<p className="text-lg mb-4 md:mb-1 font-semibold dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r from-loy1 to-[#5a4d43]">
										Sosyal ağlar ile kayıt olun
									</p>
									<div className="flex justify-center items-center">
										<button
											onClick={handleClickGoogle}
											type="button"
											aria-label="google"
											id="google"
											name="Google"
											className="flex justify-center items-center cursor-pointer rounded-full text-center w-11 h-11 mx-5 my-0 text-xl border-2 hover:text-white border-loy1 transition-colors hover:bg-loy1 text-loy1"
										>
											<ion-icon name="logo-google"></ion-icon>
										</button>
										<button
											onClick={handleClickFacebook}
											type="button"
											aria-label="facebook"
											id="facebook"
											name="Facebook"
											className="flex justify-center items-center cursor-pointer rounded-full text-center w-11 h-11 mx-5 my-0 text-xl border-2 hover:text-white border-loy1 transition-colors hover:bg-loy1 text-loy1 "
										>
											<ion-icon name="logo-facebook"></ion-icon>
										</button>
										<button
											onClick={handleClickTwitter}
											type="button"
											aria-label="twitter"
											id="twitter"
											name="Twitter"
											className="flex justify-center items-center cursor-pointer rounded-full text-center w-11 h-11 mx-5 my-0 text-xl border-2 hover:text-white border-loy1 transition-colors hover:bg-loy1 text-loy1"
										>
											<ion-icon name="logo-twitter"></ion-icon>
										</button>
									</div>
								</div>

								{/* SEPERATOR */}
								<div className="flex justify-center items-center w-full my-0 mx-auto">
									<div className="w-2/5 h-px bg-loy1 my-0 mx-5 dark:bg-gradient-to-r from-loy1 to-[#68462b]"></div>
									<p className="dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r from-loy1 to-[#68462b]">
										or
									</p>
									<div className="w-2/5 h-px bg-loy1 my-0 mx-5 dark:bg-gradient-to-r from-[#634a35] to-[#5a4d43]"></div>
								</div>

								<div>
									<label className="text-left block text-sm font-medium text-toy1 md:text-xs dark:text-loy1text">
										E-Mail
									</label>
									<div className="mt-1">
										<input
											type="email"
											name="email"
											autoComplete="on"
											className="shadow-sm focus:ring-loy1 bg-orange-50 focus:border-loy1 block w-full sm:text-sm border-loy2 rounded-md dark:bg-slate-100 dark:text-zinc-900"
											placeholder="you@example.com"
											value={email}
											onChange={(e) =>
												setEmail(e.target.value)
											}
										/>
									</div>
								</div>
								<div>
									<label className="text-left block text-sm font-medium text-toy1 md:text-xs dark:text-loy1text">
										Password
									</label>
									<div className="mt-1">
										<input
											type="password"
											autoComplete="on"
											className="shadow-sm focus:ring-loy1 bg-orange-50 focus:border-loy1 block w-full sm:text-sm border-loy2 rounded-md dark:bg-slate-100 dark:text-zinc-900"
											placeholder="Password"
											value={password}
											onChange={(e) =>
												setPassword(e.target.value)
											}
										/>
									</div>
								</div>

								<div className="text-left h-auto md:text-center flex flex-row w-full">
									<div className="w-2/4 text-left sm:hidden md:hidden lg:hidden">
										<button
											name="openaccount"
											onClick={(e) => {
												e.preventDefault();
												navigate("/login");
											}}
											className="inline-flex disabled:opacity-60 cursor-pointer items-center my-3 px-4 py-2 border-2 text-sm border-loy1  rounded-md shadow-sm text-white bg-loy1 hover:text-loy1 hover:bg-white hover:border-loy1 focus:outline-none focus-ring-2 z-[-1] focus ring-offset-2 focus:ring-orange-500 transition-colors"
											type="submit"
										>
											Oturum Aç
										</button>
									</div>
									<div className="w-2/4 sm:w-full sm:text-center md:w-full md:text-center lg:w-full lg:text-center text-right">
										<button
											name="createaccount"
											onClick={(e) => {
												handleSubmit();
												if (e.target.checked) {
													navigate("/");
												}
											}}
											disabled={!email || !password}
											className="inline-flex disabled:opacity-60 cursor-pointer items-center my-3 px-4 py-2 border-2 text-sm border-loy1 rounded-md shadow-sm text-white bg-loy1 hover:text-loy1 hover:bg-white hover:border-loy1 focus:outline-none focus-ring-2 z-[-1] focus ring-offset-2 focus:ring-orange-500 transition-colors"
											type="submit"
										>
											Kayıt Ol
										</button>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</motion.div>
		);
	}
	return (
		<div className="text-2xl font-semibold m-auto">
			{" "}
			Bir şeyler ters gitti. Sayfayı yenileyin!
		</div>
	);
}
