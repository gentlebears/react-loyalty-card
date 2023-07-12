import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import logo1 from "../assets/swipper/home.webp";
import logo2 from "../assets/swipper/kahvedunyasi.webp";
import logo3 from "../assets/swipper/moda.webp";
import logo4 from "../assets/swipper/spotify.webp";
import logo5 from "../assets/swipper/starbucks2.webp";

const SwiperList = () => {
	const logolist = [
		{ id: 1, link: logo1, alt: "Home" },
		{ id: 2, link: logo2, alt: "Kahve Dünyası" },
		{ id: 3, link: logo3, alt: "Moda Kafe" },
		{ id: 4, link: logo4, alt: "Spotify" },
		{ id: 5, link: logo5, alt: "Starbucks" },
	];
	return (
		<div className="container px-5 pt-5 md:pt-16 lg:pt-20 pb-5 w-full mx-auto">
			<Swiper
				modules={[Navigation, Pagination, Autoplay]}
				spaceBetween={50}
				slidesPerView={1}
				navigation
				autoplay={true}
				pagination={{ clickable: true }}
			>
				{logolist.map((logo) => {
					return (
						<SwiperSlide key={logo.id}>
							<img
								alt={logo.alt}
								className="flex-shrink-0 rounded-3xl w-full h-48 sm:h-56 md:h-80 lg:h-96 object-cover object-center"
								src={logo.link}
							/>
						</SwiperSlide>
					);
				})}
			</Swiper>
		</div>
	);
};

export default SwiperList;
