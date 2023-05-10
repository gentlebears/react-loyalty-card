import React from 'react';
import { Link, useParams } from 'react-router-dom';
import brands from '../components/Brands.json';
import Error from '../pages/Error404';

export const Detail = () => {
	// const detail2 = this.props;
	// console.log(detail2);
	const { name } = useParams();
	// var brands = JSON.parse(brandsjson);
	// console.log(brands);

	var useId = 'fail';
	// console.log(name);
	let appname = 'Card QR';

	for (let i = 0; i < brands.length; i++) {
		brands[i].name === name && (useId = [i]);
		// brands[i].name === name ? console.log('try ' + [i] + ' success') : console.log('try ' + [i] + ' failed');
	}

	if (useId === 'fail' || useId < 0 || useId > brands.length) {
		return <Error />;
	} else {
		return (
			<div>
				<section className='text-gray-600 body-font lg:my-3 rounded-3xl pb-16 sm:pb-0'>
					<div className='container mx-auto flex px-5 py-0 sm:py-24 md:py-24 lg:py-24 md:flex-row flex-col items-center'>
						<div className='flex flex-col sm:flex-col md:flex-row lg:flex-row rounded-3xl shadow-lg py-5 lg:py-0 md:py-0 sm:py-0 '>
							<div className='h-full mx-auto lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0'>
								{/* <img className='object-cover object-center rounded' src='https://dummyimage.com/720x600' /> */}

								{/* <img className='object-cover object-center rounded-3xl' src='https://i0.wp.com/www.habermuduru.com/wp-content/uploads/2021/03/kahve-dunyasi.png?fit=637%2C332&ssl=1' /> */}
								<img className='flex-shrink-0 rounded-3xl lg:rounded-l-3xl lg:rounded-r-none w-full h-48 sm:h-56 md:h-80 lg:h-96 object-cover object-center shadow-2xl' alt={brands[useId].name} src={brands[useId].logo} />
							</div>
							<div className='px-5 h-full my-auto lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center'>
								<h1 className='title-font sm:text-4xl text-3xl mb-4 lg:mb-3 font-medium text-gray-900'>
									{brands[useId].name}
									<br className='hidden lg:inline-block' />
									{/* Kahve Dünyası Metin-2 */}
								</h1>
								<p className='mb-4 lg:mb-2 leading-relaxed'>
									{brands[useId].name} ile yaptığınız alışverişlerden {brands[useId].totalGoal}. kahve bizden hediye! {appname} aracılığı ile aldınız her kahve size ekstra puan kazandırır, aldığınız kahveleri sistemimiz otomatik olarak sayar ve {brands[useId].totalGoal}. kahveye geldiğinizde hiç bir ödeme yapmanıza gerek kalmadan işlemlerinizi yaparız.
								</p>

								<hr className='w-2/3 mx-auto pb-4 lg:pb-2' />
								<p className='text-sm mb-4'>
									Kampanya şartları öğrenmek için ilgili şirketin sayfasına göz atabilirsiniz. İlgili alana gitmek için <span className='font-semibold cursor-pointer'> Tıkla</span>.
								</p>

								<div className='flex justify-center gap-5 sm:mb-3'>
									<Link to={'/detail/' + brands[useId].name} className='flex'>
										<button
											onClick={() => {
												brands[useId].subscribe = !brands[useId].subscribe;
											}}
											className='inline-flex disabled:opacity-60 cursor-pointer items-center px-4 py-2 border-2 border-transparent text-lg border-loy1  rounded-md shadow-sm text-white bg-loy1 hover:text-loy1 hover:bg-white hover:border-loy1 focus:outline-none focus-ring-2  focus ring-offset-2 focus:ring-loy2 transition-colors duration-200'
										>
											{brands[useId].subscribe === false ? <>Abone Ol </> : <>Abonelikten Çık</>}
										</button>
									</Link>
									<Link to={'/detail/' + brands[useId].name} className='flex'>
										<button
											onClick={() => {
												brands[useId].like = !brands[useId].like;
											}}
											className='inline-flex disabled:opacity-60 cursor-pointer items-center px-4 py-2 border-2 text-lg rounded-md shadow-sm text-loy1 bg-white hover:bg-loy1 hover:text-white focus:outline-none focus-ring-2 focus ring-offset-2 transition-colors border-loy1 duration-200'
										>
											<span className='flex scale-110'>{brands[useId].like === false ? <ion-icon name='heart-outline'></ion-icon> : <ion-icon name='heart-sharp'></ion-icon>} </span>
										</button>
									</Link>

									{/* inline-flex disabled:opacity-60 cursor-pointer items-center my-3 px-4 py-2 border-2 border-transparent text-sm border-loy1  rounded-md shadow-sm text-white bg-loy1 hover:text-loy1 hover:bg-white hover:border-loy1 focus:outline-none focus-ring-2  focus ring-offset-2 focus:ring-orange-500 transition-colors */}
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		);
	}
};
