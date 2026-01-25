import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Chondethi() {
	return (
		<div className="flex flex-col min-h-screen">
			<Header />
			<section className="bg-blue-200 text-center py-6">
				<h2 className="text-2xl font-semibold flex items-center justify-center gap-2">
					<span className="material-icons text-gray-700">
						Thư viện đề thi
					</span>
				</h2>
				<p className="text-gray-600">Lựa chọn đề thi để luyện tập</p>
			</section>

			<main className="flex-1 flex justify-center items-start mt-10">
				<div className="flex flex-wrap justify-center gap-10">
					<div className="w-64 h-64 bg-gray-100 rounded-2xl flex flex-col justify-between items-center p-6 shadow-sm hover:shadow-lg hover:bg-blue-100 hover:text-gray-800 transition transform hover:-translate-y-1">
						<button className="border rounded-full px-4 text-lg hover:bg-blue-400 hover:text-white">
							Chi tiết
						</button>
					</div>
					<div className="w-64 h-64 bg-gray-100 rounded-2xl flex flex-col justify-between items-center p-6 shadow-sm hover:shadow-lg hover:bg-blue-100 hover:text-gray-800 transition transform hover:-translate-y-1">
						<button className="border rounded-full px-4 text-lg hover:bg-blue-400 hover:text-white">
							Chi tiết
						</button>
					</div>
					<div className="w-64 h-64 bg-gray-100 rounded-2xl flex flex-col justify-between items-center p-6 shadow-sm hover:shadow-lg hover:bg-blue-100 hover:text-gray-800 transition transform hover:-translate-y-1">
						<button className="border rounded-full px-4 text-lg hover:bg-blue-400 hover:text-white">
							Chi tiết
						</button>
					</div>
				</div>
			</main>

			<Footer />
		</div>
	);
}
