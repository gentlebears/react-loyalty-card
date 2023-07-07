import HomePage from "../components/HomePage";
import SwiperList from "../components/SwiperList";
import { motion } from "framer-motion";

export default function Home() {
	return (
		<motion.div
			initial={{ opacity: 0, translateY: 25 }}
			animate={{ opacity: 1, translateY: 0 }}
			className="w-full h-screen flex-col"
		>
			<SwiperList />
			<HomePage />
		</motion.div>
	);
}
