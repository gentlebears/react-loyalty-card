import HomePage from '../components/HomePage';
import SwiperList from '../components/SwiperList';

export default function Home() {
	return (
		<div className='w-full h-screen flex-col'>
			<SwiperList />
			<HomePage />
		</div>
	);
}
