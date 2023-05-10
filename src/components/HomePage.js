import { connectFirestoreEmulator } from 'firebase/firestore';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import todos from '../store/todos';
import brands from './Brands.json';
import { useNavigate } from 'react-router-dom';
// import { activeFuntion } from './Navigation';
// import { Navigation } from './Navigation';

//? Detail Testing
import auth from '../store/auth';

const HomePage = () => {
	const navigate = useNavigate();
	// Navigation(0);
	return (
		// <div classNameNameName='grid grid-cols-4 gap-4 w-full h-auto'>
		<section className='text-gray-600 body-font my-auto pb-20 lg:pb-0 md:pb-0 sm:pd-0'>
			<div className='container px-5 pt-5 md:pt-16 lg:pt-20 pb-5 mx-auto'>
				<div className='flex flex-col text-center w-full mb-5 md:mb-16 lg:mb-20'>
					<h1 className='text-2xl font-medium title-font mb-4 text-gray-900 sm:text-4xl lg:mb-0'>Kampanya ve Fırsatlar</h1>
					{/* <p className='lg:w-2/3 mx-auto leading-relaxed text-base'>-Text Text Text-</p> */}
				</div>
				<div className='flex flex-wrap -m-4'>
					{/* 1 Test */}
					{brands.map((brand) => {
						return (
							<div key={brand.id} className='p-2 lg:p-4 md:p-4 w-1/2 lg:w-1/4 md:w-1/2 rounded-3xl'>
								<div className='h-full flex flex-col lg:items-center text-center shadow-lg rounded-3xl pb-1'>
									<Link to={'detail/' + brand.name}>
										<img alt={brand.name} className='flex-shrink-0 object-cover rounded-t-3xl w-full h-48 sm:h-56 md:h-80 lg:h-96 object-center mb-4 shadow-lg' src={brand.logo} />
									</Link>
									<div className='w-full flex flex-row'>
										<div className='w-2/3 text-left ml-3'>
											<h2 className='title-font font-medium text-base md:text-lg lg:text-lg text-gray-900 truncate'>{brand.name}</h2>
											<h3 className='text-gray-500 mb-3 text-sm md:text-base lg:text-base'>{brand.type}</h3>
										</div>
										<div className='w-1/3 text-right mr-3'>
											{/* LINK 1 */}
											<button
												onClick={() => {
													brand.like = !brand.like;
													console.log(brand.like);
													navigate('/');
												}}
												key={brand.id}
												className='inline-flex cursor-pointer items-center p-3 border-2 text-lg rounded-full shadow-sm text-loy1 bg-white hover:bg-loy1 hover:text-white focus:outline-none focus-ring-2 focus ring-offset-2 transition-colors border-loy1 duration-200 ease-in'
											>
												<span className='flex scale-110'>
													<ion-icon name={brand.like === false ? 'heart-outline' : 'heart-sharp'}></ion-icon>
												</span>
												{/* <span className='flex scale-110'>{brand.like === false ? <ion-icon name='heart-outline'></ion-icon> : <ion-icon name='heart-sharp'></ion-icon>}</span> */}
											</button>
											{/* LINK 2 */}
										</div>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</section>
		// </div>
	);
};

export default HomePage;
