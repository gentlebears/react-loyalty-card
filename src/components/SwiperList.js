import React, { Suspense, lazy } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import logo1 from '../assets/swipper/home.webp';
import logo2 from '../assets/swipper/kahvedunyasi.webp';
import logo3 from '../assets/swipper/moda.webp';
import logo4 from '../assets/swipper/spotify.webp';
import logo5 from '../assets/swipper/starbucks2.webp';

const SwiperList = () => {
	return (
		<div className='container px-5 pt-5 md:pt-16 lg:pt-20 pb-5 w-full mx-auto'>
			<Swiper
				modules={[Navigation, Pagination, Autoplay]}
				spaceBetween={50}
				slidesPerView={1}
				navigation
				autoplay={true}
				pagination={{ clickable: true }}
				centeredSlides // Görüntüleri tam ortada hizalamak için
				loop
			>
				<SwiperSlide>
					<img alt='Home' className='flex-shrink-0 rounded-3xl w-full h-48 sm:h-56 md:h-80 lg:h-96 object-cover object-center' src={logo1} />
				</SwiperSlide>
				<SwiperSlide>
					<img alt='Kahve Dünyası' className='flex-shrink-0 rounded-3xl w-full h-48 sm:h-56 md:h-80 lg:h-96 object-cover object-center' src={logo2} />
				</SwiperSlide>
				<SwiperSlide>
					<img alt='Moda Kafe' className='flex-shrink-0 rounded-3xl w-full h-48 sm:h-56 md:h-80 lg:h-96 object-cover object-center' src={logo3} />
				</SwiperSlide>
				<SwiperSlide>
					<img alt='Spotify' className='flex-shrink-0 rounded-3xl w-full h-48 sm:h-56 md:h-80 lg:h-96 object-cover object-center' src={logo4} />
				</SwiperSlide>
				<SwiperSlide>
					<img alt='Starbucks' className='flex-shrink-0 rounded-3xl w-full h-48 sm:h-56 md:h-80 lg:h-96 object-cover object-center' src={logo5} />
				</SwiperSlide>
			</Swiper>
		</div>
	);
};

export default SwiperList;

// import React, { Suspense, lazy } from 'react';
// import { LazyLoadImage } from 'react-lazy-load-image-component';
// import 'react-lazy-load-image-component/src/effects/blur.css';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination, Autoplay } from 'swiper';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';
// import 'swiper/css/autoplay';
// import logo1 from '../assets/swipper/home.webp';
// import logo2 from '../assets/swipper/kahvedunyasi.webp';
// import logo3 from '../assets/swipper/moda.webp';
// import logo4 from '../assets/swipper/spotify.webp';
// import logo5 from '../assets/swipper/starbucks2.webp';

// const SwiperList = () => {
// 	return (
// 		<div className='container px-5 pt-5 md:pt-16 lg:pt-20 pb-5 w-full mx-auto'>
// <Swiper
// 	modules={[Navigation, Pagination, Autoplay]}
// 	spaceBetween={50}
// 	slidesPerView={1}
// 	navigation
// 	autoplay
// 	pagination={{ clickable: true }}
// 	centeredSlides // Görüntüleri tam ortada hizalamak için
// 	loop // Döngüsel olarak görüntülemek için
// >
// 				<SwiperSlide>
// 					<div className='flex items-center justify-center h-96'>
// 						<div className='rounded-3xl overflow-hidden'>
// 							<LazyLoadImage alt='Home' effect='blur' src={logo1} className='w-full h-full object-cover' />
// 						</div>
// 					</div>
// 				</SwiperSlide>
// 				<SwiperSlide>
// 					<div className='flex items-center justify-center h-96'>
// 						<div className='rounded-3xl overflow-hidden'>
// 							<LazyLoadImage alt='Kahve Dünyası' effect='blur' src={logo2} className='w-full h-full object-cover' />
// 						</div>
// 					</div>
// 				</SwiperSlide>
// 				<SwiperSlide>
// 					<div className='flex items-center justify-center h-96'>
// 						<div className='rounded-3xl overflow-hidden'>
// 							<LazyLoadImage alt='Moda Kafe' effect='blur' src={logo3} className='w-full h-full object-cover' />
// 						</div>
// 					</div>
// 				</SwiperSlide>
// 				<SwiperSlide>
// 					<div className='flex items-center justify-center h-96'>
// 						<div className='rounded-3xl overflow-hidden'>
// 							<LazyLoadImage alt='Spotify' effect='blur' src={logo4} className='w-full h-full object-cover' />
// 						</div>
// 					</div>
// 				</SwiperSlide>
// 				<SwiperSlide>
// 					<div className='flex items-center justify-center h-96'>
// 						<div className='rounded-3xl overflow-hidden'>
// 							<LazyLoadImage alt='Starbucks' effect='blur' src={logo5} className='w-full h-full object-cover' />
// 						</div>
// 					</div>
// 				</SwiperSlide>
// 			</Swiper>
// 		</div>
// 	);
// };

// export default SwiperList;
