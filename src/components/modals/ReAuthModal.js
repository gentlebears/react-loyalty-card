import { reAuth } from "../../firebase";
import LoginForm from "../LoginForm";

export default function ReAuthModal({ close }) {
	const handleSubmit = async (e, email, password) => {
		e.preventDefault();
		await reAuth(password);
		close();
	};

	return <LoginForm handleSubmit={handleSubmit} noEmail={true} />;
}
