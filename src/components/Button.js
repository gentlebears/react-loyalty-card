// import React from "react";
// Üstteki kod kapatıldı 02.08.2023

const Button = (props) => {
	return (
		// div yerine button kullanılıyordu & düzenleme yapılabilir
		<button className="bg-loy1 border-2 border-loy1 text-white hover:text-loy1 font-buttonfont py-2 px-6 rounded md:ml-8 hover:bg-white duration-500 dark:border-loy1 dark:hover:border-loy1">
			{props.children}
		</button>
	);
};

export default Button;
