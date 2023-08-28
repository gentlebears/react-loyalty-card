import { lazy, Suspense } from "react";
import { Toaster } from "react-hot-toast";
import { Route, Routes, useLocation } from "react-router-dom";
import Modal from "./components/Modal";
// import Home from './pages/Home';
// import Login from './pages/Login';
// import Register from './pages/Register';
// import Settings from './pages/Settings';
// import Subscriber from './pages/Subscriber';
// import ForgotPassword from './pages/ForgotPassword';
// import Error from './pages/Error404';
// import Qr from './pages/Qr';
// import Profile from './pages/Profile';
import { useSelector } from "react-redux";
import Nav from "./components/Nav";
import { Detail } from "./pages/Detail";
import Navigation from "./components/Navigation";
import { Helmet } from "react-helmet";

const Home = lazy(() => import("./pages/Home"));
const Subscriber = lazy(() => import("./pages/Subscriber"));
const Qr = lazy(() => import("./pages/Qr"));
const Register = lazy(() => import("./pages/Register"));
const Login = lazy(() => import("./pages/Login"));
const Profile = lazy(() => import("./pages/Profile"));
const Settings = lazy(() => import("./pages/Settings"));
const ForgotPassword = lazy(() => import("./pages/ForgotPassword"));
const Error = lazy(() => import("./pages/Error404"));
// const Detail = lazy(() => import('./pages/Detail'));

function App() {
	const { open, data } = useSelector((state) => state.modal);
	const location = useLocation();
	const Menus = [
		{
			name: "Ana Sayfa",
			navigate: "/",
		},
		{
			name: "Abonelikler",
			navigate: "/subscriber",
		},
		{
			name: "QR",
			navigate: "/qr",
		},
		{
			name: "Ayarlar",
			navigate: "/settings",
		},
		{
			name: "Giriş Yap",
			navigate: "/login",
		},
		{
			name: "Kayıt Ol",
			navigate: "/register",
		},
		{
			name: "Şifremi Unuttum",
			navigate: "/forgot-password",
		},
	];
	let defaultTitle = "Opss!";
	Menus.forEach((menu, i) => {
		if (menu.navigate === location.pathname)
			return (defaultTitle = menu.name);
	});

	return (
		<div className="">
			<Helmet>
				<title>
					{defaultTitle === "Ana Sayfa"
						? process.env.REACT_APP_NAME
						: defaultTitle + " - " + process.env.REACT_APP_NAME}
				</title>
			</Helmet>
			<Nav />
			<Navigation />
			<Toaster position="top-right" />
			{open && <Modal name={open} data={data} />}

			<div className="dark:text-slate-100">
				<Suspense
					fallback={<h1 className="dark:text-white">Loading...</h1>}
				>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/subscriber" element={<Subscriber />} />
						<Route path="/qr" element={<Qr />} />
						<Route path="/detail/:name" element={<Detail />} />
						<Route path="/register" element={<Register />} />
						<Route path="/login" element={<Login />} />
						<Route path="/profile" element={<Profile />} />
						<Route path="/settings" element={<Settings />} />
						<Route
							path="/forgot-password"
							element={<ForgotPassword />}
						/>
						<Route path="*" element={<Error />} />
						{/* <Route path='/detail/:*' element={<Error />} /> */}
					</Routes>
				</Suspense>
			</div>
		</div>
	);
}

export default App;
