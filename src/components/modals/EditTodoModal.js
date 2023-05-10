import { updateTodo } from '../../firebase';
import { useState } from 'react';
import { async } from '@firebase/util';

export default function EditTodoModal({ close, data }) {
	const [todo, setTodo] = useState(data.todo);

	const clickHandle = async () => {
		await updateTodo(data.id, {
			todo,
		});
		close();
	};
	return (
		<>
			<div className='flex gap-x-4'>
				<input className='shadow-sm focus:ring-loy1 focus:border-loy1 block w-full sm:text-sm border-gray-300 rounded-md' type='text' value={todo} onChange={(e) => setTodo(e.target.value)} />
				<button className='inline-flex disabled:opacity-60 cursor-pointer items-center px-4 py-2 border-2 text-sm font-medium rounded-md shadow-sm text-white border-loy1 bg-loy1 hover:bg-white hover:text-loy1 transition-colors duration-200 focus:outline-none focus-ring-2 focus ring-offset-2 focus:ring-loy1' onClick={clickHandle}>
					Kaydet
				</button>
			</div>
		</>
	);
}
