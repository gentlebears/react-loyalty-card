import { useState, useEffect } from "react";

export default function Theme() {
	const options = [
		{
			icon: "sunny",
			text: "light",
		},
		{
			icon: "moon",
			text: "dark",
		},
		{
			icon: "desktop-outline",
			text: "system",
		},
	];
	const [theme, setTheme] = useState(
		localStorage.getItem("theme") ? localStorage.getItem("theme") : "system"
	);
	const element = document.documentElement;
	const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");

	// useEffect(() => {
	// 	if (window.matchMedia('(prefers-color-scheme: dark).matches')) {
	// 		setTheme('dark');
	// 	} else {
	// 		setTheme('light');
	// 	}
	// }, [theme]);

	// useEffect(() => {
	// 	if (theme === 'dark') {
	// 		document.documentElement.classList.add('dark');
	// 	} else {
	// 		document.documentElement.classList.remove('dark');
	// 	}
	// 	localStorage.setItem('theme', JSON.stringify(theme));
	// 	console.log(localStorage.getItem('theme'));
	// }, [theme]);

	// const handleThemeSwitch = () => {
	// 	setTheme(theme === 'dark' ? 'light' : 'dark');
	// };
	function onWindowMatch() {
		localStorage.theme === "dark" ||
		(!("theme" in localStorage) && darkQuery.matches)
			? element.classList.add("dark")
			: element.classList.remove("dark");
	}

	onWindowMatch();
	useEffect(() => {
		switch (theme) {
			case "dark":
				element.classList.add("dark");
				localStorage.setItem("theme", "dark");
				break;
			case "light":
				element.classList.remove("dark");
				localStorage.setItem("theme", "light");
				break;

			default:
				localStorage.removeItem("theme");
				onWindowMatch();
				break;
		}
	}, [theme]);
	return (
		<>
			<div className="hidden sm:hidden md:hidden lg:flex flex-row top-5 right-10 dark:bg-slate:800 bg-gray-200 dark:bg-zinc-800 rounded transition-all duration-500 ease-in">
				{options.map((opt) => (
					<button
						key={opt.text}
						onClick={() => setTheme(opt.text)}
						className={`w-8 h-8 leading-9 text-xl rounded-full m-1 
					${theme === opt.text && "text-sky-600"}
					`}
					>
						<ion-icon name={opt.icon}></ion-icon>
					</button>
				))}
			</div>

			{/* <label className='inline-flex relative items-center mr-5 cursor-pointer'>
				<input onChange={handleThemeSwitch} type='checkbox' value='' className='sr-only peer' />
				<div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-red-300 dark:peer-focus:ring-red-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-red-600"></div>
				<span className='ml-3 text-sm font-medium text-gray-900 dark:text-gray-300'>Red</span>
			</label> */}
		</>
	);
}
