import Footer from "../components/Footer";
import Header from "../components/Header";
import chudes from "../data/chonthe";

export default function Chonthe() {
	return (
		<div className="min-h-screen flex flex-col bg-base-200">
			<Header />

			{/* HEADER SECTION */}
			<section className="hero bg-blue-200 text-slate-800 py-8">
				<div className="hero-content text-center">
					<div>
						<h2 className="text-3xl font-bold">Flashcards</h2>
						<p className="mt-2 text-base">
							Lựa chọn lĩnh vực từ vựng mà bạn cần
						</p>
					</div>
				</div>
			</section>

			{/* MAIN */}
			<main className="flex-1 container mx-auto px-6 py-10">
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
					{chudes.map((chude) => (
						<div
							key={chude.id}
							className="card bg-base-100 shadow-xl hover:shadow-2xl transition"
						>
							<div className="card-body items-center text-center">
								<h3 className="card-title">{chude.title}</h3>
								<p>{chude.description}</p>
								<div className="card-actions">
									<button className="btn btn-primary bg-blue-300 text-slate-800">
										Bắt đầu học
									</button>
								</div>
							</div>
						</div>
					))}
				</div>
			</main>

			<Footer />
		</div>
	);
}
