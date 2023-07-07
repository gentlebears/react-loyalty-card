import React, { lazy, Suspense } from "react";
import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import Modal from "./components/Modal";
// import Home from './pages/Home';
// import Login from './pages/Login';
// import Register from './pages/Register';
import { useSelector } from "react-redux";
// import Settings from './pages/Settings';
// import Subscriber from './pages/Subscriber';
// import ForgotPassword from './pages/ForgotPassword';
import Nav from "./components/Nav";
import { Detail } from "./pages/Detail";
import Navigation from "./components/Navigation";
// import Error from './pages/Error404';
// import Qr from './pages/Qr';
// import Profile from './pages/Profile';

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

	return (
		<>
			<Nav />
			<Navigation />
			<Toaster position="top-right" />
			{open && <Modal name={open} data={data} />}

			<div className="">
				<Suspense fallback={<h1>Loading...</h1>}>
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
		</>
	);
}

export default App;
