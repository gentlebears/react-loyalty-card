import { Link, useNavigate } from "react-router-dom";
import brands from "./Brands.json";
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

const HomePage = () => {
	const navigate = useNavigate();
	// Navigation(0);
	return (
		<>
			<section className="text-gray-600 body-font my-auto pb-20 lg:pb-0 md:pb-0 sm:pd-0">
				<div className="container px-5 pt-5 md:pt-16 lg:pt-20 pb-5 mx-auto">
					<div className="flex flex-col text-center w-full mb-5 md:mb-16 lg:mb-20">
						<h1 className="text-2xl font-medium title-font mb-4 text-gray-900 sm:text-4xl lg:mb-0 dark:text-slate-100">
							Kampanya ve Fırsatlar
						</h1>
						{/* <p className='lg:w-2/3 mx-auto leading-relaxed text-base'>-Text Text Text-</p> */}
					</div>
					<motion.div
						initial="hidden"
						animate="visible"
						variants={container}
						className="flex flex-wrap -m-4"
					>
						{/* 1 Test */}
						{brands.map((brand) => {
							return (
								<motion.div
									variants={item}
									key={brand.id}
									className="p-2 lg:p-4 md:p-4 w-1/2 lg:w-1/4 md:w-1/2 rounded-3xl"
								>
									<div className="h-full flex flex-col lg:items-center text-center shadow-lg rounded-3xl pb-1 dark:shadow-zinc-800">
										<Link to={"detail/" + brand.name}>
											<img
												alt={brand.name}
												className="flex-shrink-0 object-cover rounded-t-3xl w-full h-48 sm:h-56 md:h-80 lg:h-96 object-center mb-4 shadow-lg dark:shadow-zinc-800"
												src={brand.logo}
											/>
										</Link>

										<div className="w-full flex flex-row">
											<div className="w-2/3 text-left ml-3">
												<h2 className="title-font font-medium text-base md:text-lg lg:text-lg text-gray-900 dark:text-loy1text truncate">
													{brand.name}
												</h2>
												<h3 className="text-gray-500 dark:text-gray-400 mb-3 text-sm md:text-base lg:text-base">
													{brand.type}
												</h3>
											</div>
											<div className="w-1/3 text-right mr-3">
												{/* LINK 1 */}
												<button
													onClick={() => {
														brand.like =
															!brand.like;
														console.log(brand.like);
														navigate("/");
													}}
													key={brand.id}
													className="inline-flex cursor-pointer items-center p-3 border-2 text-lg rounded-full shadow-sm text-loy1 bg-white hover:bg-loy1 hover:text-white focus:outline-none focus-ring-2 focus ring-offset-2 transition-colors border-loy1 dark:border-zinc-200 dark:bg-loy1 hover:dark:bg-zinc-50 hover:dark:text-loy1 dark:text-zinc-200 duration-200 ease-in "
												>
													<span className="flex scale-110">
														<ion-icon
															name={
																brand.like ===
																false
																	? "heart-outline"
																	: "heart-sharp"
															}
														></ion-icon>
													</span>
													{/* <span className='flex scale-110'>{brand.like === false ? <ion-icon name='heart-outline'></ion-icon> : <ion-icon name='heart-sharp'></ion-icon>}</span> */}
												</button>
												{/* LINK 2 */}
											</div>
										</div>
									</div>
								</motion.div>
							);
						})}
					</motion.div>
				</div>
			</section>
		</>
	);
};

export default HomePage;
