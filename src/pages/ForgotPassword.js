import { forgotPassword, auth } from '../firebase';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ForgotPassword() {
	const [email, setEmail] = useState('');

	const handleEmail = async (e) => {
		e.preventDefault();
		await forgotPassword(email);
	};

	// const handleEmail = async () => {
	// 	await forgotPassword(auth, email);
	// 	console.log('Password reset email sent');
	// };
	const navigate = useNavigate();
	const user = localStorage.getItem('user');
	useEffect(() => {
		if (user) navigate('/');
	});

	return (
		<form onSubmit={handleEmail} className='max-w-xl h-screen2 content-center self-center items-center mx-auto grid gap-y-px py-4 px-5'>
			<div className='p-10 rounded-3xl shadow-[0px_0px_5px_rgba(109,56,19,0.9)]'>
				{/* <form onSubmit={handleEmail} className='max-w-xl mx-auto grid gap-y-4 py-4'> */}
				<h1 className='text-xl font-bold mb-4'>Şifreyi Sıfırla</h1>
				<div>
					<label className='block text-sm font-medium text-toy1'>E-Mail</label>
					<div className='mt-1'>
						<input type='email' value={email} onChange={(e) => setEmail(e.target.value)} name='email' className='shadow-sm focus:ring-loy1 bg-orange-50 focus:border-loy1 block w-full sm:text-sm border-loy2 rounded-md' placeholder='you@example.com' />
					</div>
					<div className='gap-y-4 py-3'>
						<button disabled={!email} className='inline-flex disabled:opacity-60 cursor-pointer items-center my-3 px-4 py-2 border-2 border-transparent text-sm border-loy1  rounded-md shadow-sm text-white bg-loy1 hover:text-loy1 hover:bg-white hover:border-loy1 focus:outline-none focus-ring-2  focus ring-offset-2 focus:ring-orange-500 transition-colors duration-200' type='submit'>
							Şifre Sıfırlama Linkini Gönder
						</button>
					</div>
				</div>
			</div>
		</form>
	);
}
