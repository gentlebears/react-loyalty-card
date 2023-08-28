import { useNavigate } from "react-router-dom";

const Error404 = () => {
	const navigate = useNavigate();

	return (
		<div className="max-w-xl h-screen2 text-center font-buttonfont content-center self-center items-center mx-auto grid gap-y-5 py-4 px-5">
			<h1 className="text-9xl">404</h1>
			<div className="bg-zinc-900 text-white w-auto my-auto mx-auto py-10 px-9 sm:px-28 sm:py-10 text-2xl">
				Opps! Sayfa bulunamadı
			</div>
			<div className="">
				Aradığınız sayfa mevcut değil. Adresi yanlış yazmış
				olabilirsiniz veya sayfa taşınmış olabilir.
			</div>
			<div>
				<button
					type="submit"
					className="inline-flex cursor-pointer items-center px-4 py-2 border-2 text-sm font-medium rounded-md shadow-sm text-loy1 bg-white hover:bg-loy1 hover:text-white transition-colors border-loy1 duration-200"
					onClick={(e) => {
						e.preventDefault();
						navigate("/");
					}}
				>
					Ana Sayfaya Dön
				</button>
			</div>
		</div>
	);
};

export default Error404;
