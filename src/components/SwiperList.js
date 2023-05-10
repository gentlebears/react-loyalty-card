import React, { Suspence, lazy } from 'react';

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
			<Swiper modules={[Navigation, Pagination, Autoplay]} spaceBetween={50} slidesPerView={1} navigation autoplay={true} pagination={{ clickable: true }}>
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
