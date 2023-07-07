import React from "react";
import qr1 from "../assets/qr/qr-code1.png";
import brands from "../components/Brands.json";
import { motion } from "framer-motion";

const Qr = () => {
	var min = 0;
	var max = 8;
	var rand = Math.floor(min + Math.random() * (max - min));

	return (
		// <div className='px-5 py-4 pb-24 lg:pb-4 md:pb-4 sm:pb-4 self-center items-center textcenter'>
		// <div className='max-w-5xl pt-5 md:pt-16 lg:pt-20 pb-5 mx-auto rounded-3xl shadow-[0px_0px_5px_rgba(109,56,19,0.9)] px-5 lg:px-48 md:px-40 sm:px-10'></div>

		<motion.div
			initial={{ opacity: 0, translateY: 25 }}
			animate={{ opacity: 1, translateY: 0 }}
			className="max-w-xl h-screen2 text-center font-buttonfont self-center items-center mx-auto grid gap-y-5 py-4 px-5"
		>
			<h1 className="text-5xl">{brands[rand].name}</h1>
			<div className="text-white w-auto my-auto mx-auto py-10 px-9 shadow-lg">
				<img alt={"QR - " + brands[rand].name} src={qr1} />
			</div>
		</motion.div>
	);
};

export default Qr;
