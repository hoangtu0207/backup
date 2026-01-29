import Footer from "./components/Footer";
import Header from "./components/Header";
import IndexLogin from "./Home/IndexLogin";
import IndexUnLogin from "./Home/IndexUnLogin";

export default function Home() {
	return (
		<div className="min-h-screen flex flex-col">
			<header>
				<Header />
			</header>
			<div className="flex-1">
				{true ? <IndexLogin /> : <IndexUnLogin />}
			</div>
			<Footer />
		</div>
	);
}
