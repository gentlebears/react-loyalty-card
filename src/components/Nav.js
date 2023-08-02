import React, { useState } from "react";
import Button from "./Button";
import Theme from "./Theme";
import { Link } from "react-router-dom";

// KULLANIM DIŞI DÜZENLENECEK
const Nav = () => {
	let Links = [
		{ name: "Ana Sayfa", link: "/" },
		{ name: "Abonelikler", link: "/subscriber" },
		{ name: "QR", link: "/qr" },
		{ name: "Ayarlar", link: "/settings" },
		{ name: "Profil", link: "/profile" },
	];
	const user = localStorage.getItem("user");

	let [open, setOpen] = useState(false);
	return (
		<div className="shadow-md w-full relative z-50 top-0 left-0 hidden sm:block">
			<div className="md:flex items-center justify-between dark:bg-zinc-900 bg-white py-4 md:px-10 px-7 transition-all duration-200 ease-in">
				<Link to={"/"}>
					<div className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-black dark:text-white">
						<span className="text-3xl text-black dark:text-white mr-1 pt-2">
							<ion-icon name="logo-ionic"></ion-icon>
						</span>
						Card
					</div>
				</Link>

				<div
					onClick={() => setOpen(!open)}
					className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden dark:text-gray-400"
				>
					<ion-icon name={open ? "close" : "menu"}></ion-icon>
				</div>
				<div className="flex">
					<ul
						className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static dark:bg-zinc-900 bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-200 ease-in ${
							open ? "top-20 " : "top-[-490px]"
						}`}
					>
						{Links.map((link) => (
							<li
								key={link.name}
								className="md:ml-8 text-xl md:my-0 my-7"
							>
								{link.name === "Profil" ? (
									//EDİT
									<Link
										to={link.link}
										className={
											user
												? "text-gray-800 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-50 duration-200"
												: "hidden text-gray-800 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-50 duration-200"
										}
									>
										{link.name}
									</Link>
								) : (
									<Link
										to={link.link}
										className="text-gray-800 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-50 duration-200"
									>
										{link.name}
									</Link>
								)}
							</li>
						))}
						<li className={user ? "hidden" : "flex"}>
							<Link to={"/login"}>
								<Button>Giriş Yap</Button>
							</Link>
							<Link to={"/register"}>
								<Button>Kayıt Ol</Button>
							</Link>
						</li>
						<li className="bg-transparent flex text-white font-[Poppins] py-2 px-6 rounded md:ml-8 hover:bg-transparent duration-200">
							<Theme />
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Nav;
