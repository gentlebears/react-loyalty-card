import { useState } from "react";
import { update, resetPassword, auth } from "../firebase";
import { useSelector } from "react-redux";
import { setUserData } from "../utils";
import { motion } from "framer-motion";
export default function UpdateProfile() {
	const { user } = useSelector((state) => state.auth);
	const [displayName, setdisplayName] = useState(user.displayName || "");
	const [avatar, setAvatar] = useState(user.photoURL || "");
	const [password, setPassword] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();
		await update({
			displayName,
			photoURL: avatar,
		});
		setUserData();
	};

	const handleResetSubmit = async (e) => {
		e.preventDefault();
		const result = await resetPassword(password);
		if (result) {
			setPassword("");
		}
	};

	return (
		// <div className='px-5 py-4 pb-24 lg:pb-4 md:pb-4 sm:pb-4 self-center items-center'>
		// <div className='max-w-5xl px-5 pt-5 md:pt-16 lg:pt-20 pb-5 mx-auto rounded-3xl shadow-[0px_0px_5px_rgba(109,56,19,0.9)]'>

		// <div className='max-w-xl h-auto sm:h-screen2 self-center items-center py-4 mx-auto grid gap-y-px px-5'>
		// <div className='py-12 h-auto px-5 grid gap-y-10 shadow-[0px_0px_5px_rgba(109,56,19,0.9)] rounded-3xl'>
		<motion.div
			initial={{ opacity: 0, translateY: 25 }}
			animate={{ opacity: 1, translateY: 0 }}
			className="px-5 py-4 pb-24 lg:pb-4 md:pb-4 sm:pb-4 self-center items-center"
		>
			<div className="max-w-5xl pt-5 md:pt-16 lg:pt-20 pb-5 mx-auto rounded-3xl shadow-[0px_0px_5px_rgba(109,56,19,0.9)] px-5 lg:px-48 md:px-40 sm:px-10">
				{/* PROFILE UPDATE */}
				<form onSubmit={handleSubmit} className="grid">
					<h1 className="text-xl font-bold mb-4">Profili Güncelle</h1>
					<div>
						<label className="block text-sm font-medium text-toy1">
							Ad Soyad
						</label>
						<div className="mt-1">
							<input
								type="text"
								name="text"
								className="shadow-sm focus:ring-loy1 bg-orange-50 focus:border-loy1 block w-full sm:text-sm border-loy2 rounded-md"
								placeholder="John Doe"
								value={displayName}
								onChange={(e) => setdisplayName(e.target.value)}
							/>
						</div>
					</div>

					<div>
						<label className="block text-sm font-medium text-toy1">
							Fotoğraf
						</label>
						<div className="mt-1">
							<input
								type="text"
								name="text"
								className="shadow-sm focus:ring-loy1 bg-orange-50 focus:border-loy1 block w-full sm:text-sm border-loy2 rounded-md"
								placeholder="https://photo.url/"
								value={avatar}
								onChange={(e) => setAvatar(e.target.value)}
							/>
						</div>
					</div>

					<div className="pl-px">
						<button
							className="inline-flex disabled:opacity-60 cursor-pointer items-center my-3 px-4 py-2 border-2 text-sm border-loy1 duration-200 rounded-md shadow-sm text-white bg-loy1 hover:text-loy1 hover:bg-white hover:border-loy1 focus:outline-none focus-ring-2 z-[-1] focus ring-offset-2 focus:ring-orange-500 transition-colors"
							type="submit"
						>
							Güncelle
						</button>
					</div>
				</form>
				{/* PASSWORD UPDATE */}
				<form onSubmit={handleResetSubmit} className="grid">
					<h1 className="text-xl font-bold mb-4">Şifreyi Güncelle</h1>
					<div>
						<label className="block text-sm font-medium text-toy1">
							Şifre
						</label>
						<div className="mt-1">
							<input
								type="password"
								autoComplete="off"
								name="password"
								className="shadow-sm focus:ring-loy1 bg-orange-50 focus:border-loy1 block w-full sm:text-sm border-loy2 rounded-md"
								placeholder="Password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
							/>
						</div>
					</div>

					<div className="pl-px">
						<button
							disabled={!password}
							className="inline-flex disabled:opacity-60 cursor-pointer items-center my-3 px-4 py-2 border-2 text-sm border-loy1 duration-200 rounded-md shadow-sm text-white bg-loy1 hover:text-loy1 hover:bg-white hover:border-loy1 focus:outline-none focus-ring-2 z-[-1] focus ring-offset-2 focus:ring-orange-500 transition-colors"
							type="submit"
						>
							Şifreyi Güncelle
						</button>
					</div>
				</form>
			</div>
		</motion.div>
	);
}
