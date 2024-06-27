import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
	logout,
	auth as emailAuth,
	deleteTodo,
	emailVerification,
	addTodo,
} from "../firebase";
import { logout as logoutHandle } from "../store/auth";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { modal } from "../utils";
import { motion } from "framer-motion";
import userPhoto from "../assets/logo/userphoto.webp";
import { Helmet } from "react-helmet";

// AUTO ANIMATE
import { useAutoAnimate } from "@formkit/auto-animate/react";

const Profile = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { user } = useSelector((state) => state.auth);
	const { todos } = useSelector((state) => state.todos);
	const [animationParent] = useAutoAnimate();

	const [todo, setTodo] = useState("");

	const submitHandle = async (e) => {
		e.preventDefault();
		await addTodo({
			todo,
			uid: user.uid,
		});
		setTodo("");
	};

	const handleDelete = async (id) => {
		await deleteTodo(id);
	};

	const handleLogout = async () => {
		await logout();
		dispatch(logoutHandle());
		navigate("/login", {
			replace: true,
		});
		window.location.reload(false);
	};

	// Bu kod direkt olarak link'in sonuna ekleme yapıyor!
	// const handleLogout = async () => {
	// 	await logout();
	// 	dispatch(logoutHandle());
	// 	navigate('login', {
	// 		replace: true,
	// 	});
	// };

	const handleVerification = async () => {
		await emailVerification();
	};
	// const hideshow = localStorage.getItem('user');
	useEffect(() => {
		if (!user) navigate("/");
	});

	if (user) {
		// localStorage.setItem('token', true);
		// setToken(true);
		return (
			// <section className='text-gray-600 body-font my-auto pb-20 lg:pb-0 md:pb-0 sm:pd-0'>
			// <div className='container px-5 pt-5 md:pt-16 lg:pt-20 pb-5 mx-auto'>

			// <div className='max-w-5xl h-screen2 self-center items-center mx-auto grid gap-y-px py-4 px-5 '>
			// 	<div className='container p-10 rounded-3xl shadow-[0px_0px_5px_rgba(109,56,19,0.9)]'>
			<motion.div
				initial={{ opacity: 0, translateY: 25 }}
				animate={{ opacity: 1, translateY: 0 }}
				className="my-auto"
			>
				<Helmet>
					<title>
						{user.displayName + " - " + process.env.REACT_APP_NAME}
					</title>
				</Helmet>
				<div className="px-5  py-4 pb-24 lg:pb-4 md:pb-4 sm:pb-4 self-center items-center">
					<div className="max-w-5xl px-5 pt-5 md:pt-16 lg:pt-20 pb-5 mx-auto rounded-3xl shadow-[0px_0px_5px_rgba(109,56,19,0.9)]">
						<div className="flex w-full gap-x-4 items-center self-center content-center">
							<div className="flex w-full p-1 border bg-gray-100 border-gray-200 rounded-full">
								{/* PHOTO */}
								<img
									src={
										user.photoURL
											? user.photoURL
											: userPhoto
									}
									className="w-24 h-24 shadow-lg rounded-full"
									alt={user.displayName + " Photo"}
								/>
								{/* TEXT */}
								<div className="flex-row font-buttonfont mr-auto ml-5 content-center self-center">
									<div className="dark:text-gray-700">
										{user.displayName}
									</div>
									<div className="text-xs text-gray-400">
										User
									</div>
									<div>
										<button
											onClick={handleLogout}
											className="text-xs text-red-400 bg-transparent"
										>
											Çıkıp yap
										</button>
									</div>
								</div>
								{/* BUTON */}
								<div className="flex gap-x-1 sm:gap-x-5 font-buttonfont ml-auto mr-5 sm:mr-5 content-center self-center text-right text-gray-600">
									<div className="hidden sm:block">
										<Link
											to="/settings"
											className="flex mx-auto content-center self-center text-4xl"
										>
											<ion-icon name="settings-outline"></ion-icon>
										</Link>
									</div>
									<div>
										{/* user verisi return edilmeden çekilmiyor bunun yerine auth çekildi - güvenlik açısından tekrar incele! */}
										{!emailAuth.currentUser
											.emailVerified && (
											<button
												onClick={handleVerification}
												className="flex mx-auto content-center self-center text-3xl sm:text-4xl"
											>
												<ion-icon name="mail-unread-outline"></ion-icon>
											</button>
										)}
									</div>
									<div>
										<button
											onClick={handleLogout}
											className="flex mx-auto content-center self-center text-3xl sm:text-4xl"
										>
											<ion-icon name="log-out-outline"></ion-icon>
										</button>
									</div>
								</div>
							</div>
						</div>

						<form
							className="flex gap-x-4 mt-4"
							onSubmit={submitHandle}
						>
							<input
								onChange={(e) => setTodo(e.target.value)}
								value={todo}
								className="shadow-sm focus:ring-loy1 focus:border-loy1 block w-full sm:text-sm border-gray-300 rounded-md"
								type="text"
								placeholder="Not"
							/>
							<button
								disabled={!todo}
								className="inline-flex disabled:opacity-60 cursor-pointer items-center px-4 py-2 border-2 text-sm font-medium rounded-md shadow-sm text-white border-loy1 bg-loy1 hover:bg-white hover:text-loy1 transition-colors duration-200 focus:outline-none focus-ring-2 focus ring-offset-2 focus:ring-loy1"
							>
								Ekle
							</button>
						</form>

						<ul
							ref={animationParent}
							className="mt-4 flex flex-col gap-y-2"
						>
							{todos.map((todo) => (
								<li
									key={todo.id}
									className="p-4 flex justify-between items-center rounded bg-orange-50 text-sm text-loy1"
								>
									{todo.todo}
									<div className="flex gap-x-2">
										<button
											onClick={() => {
												modal("edit-todo-modal", todo);
											}}
											className="h-7 rounded px-3 text-xs border-2 border-loy1 bg-loy1 text-white hover:bg-white hover:text-loy1 transition-colors duration-200"
										>
											Düzenle
										</button>
										<button
											onClick={() => {
												handleDelete(todo.id);
											}}
											className="h-7 rounded px-3 text-xs border-2 border-loy1 bg-loy1 text-white hover:bg-white hover:text-loy1 transition-colors duration-200"
										>
											Sil
										</button>
									</div>
								</li>
							))}
							{todos.length === 0 && (
								<li className="p-4 flex justify-between items-center rounded bg-red-50 text-sm text-red-700">
									Hiç not eklemedin
								</li>
							)}
						</ul>
					</div>
				</div>
			</motion.div>
		);
	}
};

export default Profile;
