import brands from "../components/Brands.json";
import { motion } from "framer-motion";

const container = {
	visible: {
		transition: {
			staggerChildren: 0.1,
		},
	},
};
const item = {
	hidden: {
		opacity: 0,
		translateY: 25,
	},
	visible: {
		opacity: 1,
		translateY: 0,
	},
};

export default function Subscriber() {
	return (
		// <div className='px-5 py-4 pb-24 lg:pb-4 md:pb-4 sm:pb-4 self-center items-center'>
		// <div className='max-w-5xl px-5 pt-5 md:pt-16 lg:pt-20 pb-5 mx-auto rounded-3xl shadow-[0px_0px_5px_rgba(109,56,19,0.9)]'>
		<motion.div
			initial={{ opacity: 0, translateY: 25 }}
			animate={{ opacity: 1, translateY: 0 }}
			className="my-auto"
		>
			<div className="px-5 py-4 pb-24 lg:pb-4 md:pb-4 sm:pb-4 self-center items-center">
				<div className="max-w-5xl px-5 pt-5 md:pt-16 lg:pt-20 pb-5 mx-auto rounded-3xl shadow-[0px_0px_5px_rgba(109,56,19,0.9)]">
					<div className="flex flex-col text-center w-full mb-5">
						<h1 className="text-2xl font-medium title-font sm:mb-4 text-gray-900">
							Abonelikler
						</h1>
						{/* <p className='lg:w-2/3 mx-auto leading-relaxed text-base'>-Text Text Text-</p> */}
					</div>

					<motion.div
						initial="hidden"
						animate="visible"
						variants={container}
						className="flex flex-wrap -m-2"
					>
						{brands.map((brand) => {
							if (brand.subscribe === true) {
								return (
									<motion.div
										variants={item}
										key={brand.id}
										className="p-2 lg:w-1/2 w-full"
									>
										<div className="h-full flex items-center border-gray-200 border p-4 rounded-3xl">
											<img
												alt={brand.name}
												className="border-gray-200 border w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-2xl mr-4 shadow-lg"
												src={brand.logo}
											/>
											<div className="flex-grow w-28">
												<h2 className="text-gray-900 title-font font-medium">
													{brand.name}
												</h2>
												<p className="text-gray-500 text-sm">
													{brand.type}
												</p>
												{/* <p className='text-gray-500'>{brand.description}</p> */}
											</div>

											<div className="flex-grow scale-90 w-16 rounded-lg my-auto border-gray-200 border text-center">
												<div className="w-full mx-auto">
													<div className="w-full mx-auto font-medium border border-x-transparent border-t-transparent">
														Goal
													</div>
													<div className="flex flex-row w-full mx-auto">
														<div className="text-red-300 w-1/2 font-normal border border-y-transparent border-l-transparent">
															{brand.goal}
														</div>
														<div className="text-emerald-700 w-1/2 font-bold">
															{brand.totalGoal}
														</div>
													</div>
												</div>
											</div>
											<div className="flex-grow my-auto mx-auto text-right">
												{/* <Link to={'/qr'}> */}
												<button className="text-gray-900 object-cover object-center text-3xl pt-1 rounded-lg mx-px h-12 w-12 border-gray-200 border">
													<ion-icon name="scan-outline"></ion-icon>
												</button>
												{/* </Link> */}
											</div>
										</div>
									</motion.div>
								);
							}
							return null;
						})}
					</motion.div>
				</div>
			</div>
		</motion.div>
	);
}
