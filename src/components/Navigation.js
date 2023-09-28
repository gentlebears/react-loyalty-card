import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export const Navigation = () => {
	const location = useLocation();
	const user = localStorage.getItem("user");
	const Menus = [
		{
			name: "Ana Sayfa",
			navigate: "/",
			icon: "home-outline",
			dis: "translate-x-0",
		},
		{
			name: "Abonelik",
			navigate: "/subscriber",
			icon: "grid-outline",
			dis: "translate-x-16",
		},
		{
			name: "QR",
			navigate: "/qr",
			icon: "scan-outline",
			dis: "translate-x-32",
		},
		{
			name: "Ayarlar",
			navigate: "/settings",
			icon: "settings-outline",
			dis: "translate-x-48",
		},
		{
			name: "Giriş Yap",
			navigate: "/register",
			icon: "log-in-outline",
			dis: "translate-x-64",
		},
	];
	<ion-icon name="log-in-outline"></ion-icon>;
	let activeValue = 0;
	Menus.forEach((menu, i) => {
		if (menu.navigate === location.pathname) return (activeValue = i);
	});

	// Menus.map((menu, i) => {
	// 	if (menu.navigate === location.pathname) return (activeValue = i);
	// });
	const [active, setActive] = useState(activeValue);

	var icon = "";
	var name = "";
	if (user) {
		icon = "person-outline";
		name = "Profil";
	} else {
		icon = "log-in-outline";
		name = "Giriş Yap";
	}

	return (
		<>
			<div className="sm:hidden md:hidden lg:hidden bg-white h-[4.7rem] rounded-t-xl bottom-0 w-full fixed"></div>
			<div className="sm:hidden md:hidden lg:hidden bg-zinc-900 max-h-[4.4rem] px-6 rounded-t-xl text-white bottom-0 fixed flex justify-center w-full z-50">
				<ul className="flex relative">
					<span
						className={`bg-loy1 duration-500 ${Menus[active].dis} border-4 border-white h-16 w-16 absolute
         -top-5 rounded-full`}
					>
						<span
							className="w-3.5 h-3.5 bg-transparent absolute top-4 -left-[18px] 
          rounded-tr-[11px] shadow-myShadow1"
						></span>
						<span
							className="w-3.5 h-3.5 bg-transparent absolute top-4 -right-[18px] 
          rounded-tl-[11px] shadow-myShadow2"
						></span>
					</span>
					{Menus.map((menu, i) => (
						<li key={i} className="w-16">
							<Link
								to={menu.navigate}
								className="flex flex-col text-center text-[0.9rem] pt-6 w-auto"
								onClick={() => setActive(i)}
							>
								<span
									className={`text-xl cursor-pointer duration-500 ${
										i === active && "-mt-6 text-white"
									}`}
								>
									{/* {{user.photoURL && <img src={user.photoURL} className='w-5 h-5 rounded-full' />}} */}
									<ion-icon
										name={
											menu.icon === "log-in-outline"
												? icon === "log-in-outline"
													? icon
													: icon
												: menu.icon
										}
									></ion-icon>
								</span>
								<span
									className={` ${
										active === i
											? "translate-y-4 duration-700 opacity-100"
											: "opacity-0 translate-y-10"
									} `}
								>
									{menu.name === "Giriş Yap"
										? name === "Giriş Yap"
											? name
											: name
										: menu.name}
								</span>
							</Link>
						</li>
					))}
				</ul>
			</div>
		</>
	);
};

export default Navigation;
