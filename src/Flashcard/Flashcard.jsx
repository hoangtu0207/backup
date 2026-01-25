import Footer from "../components/Footer";
import Header from "../components/Header";
import { mockData } from "../../data/mock-data";

export default function Flashcard() {
	function chuyenTuTiepTheo() {
		console.log("chuyen tu tiep");
	}

	return (
		<div className="min-h-screen flex flex-col">
			<Header />

			<main className="flex-1 flex flex-col items-center justify-center gap-6">
				<h2 className="font-bold text-2xl">
					Từ vựng Tiếng Anh giao tiếp cơ bản
				</h2>

				{mockData.flashcards.map((flashcard, index) => (
					<div
						key={index}
						className="card w-96 bg-base-100 shadow-xl"
					>
						<div className="card-body items-center text-center">
							<h3 className="card-title text-green-600">
								{flashcard.word}
							</h3>
							<p className="italic">{flashcard.phonetic}</p>
							<p className="badge badge-outline">
								{flashcard.type}
							</p>
							<p>{flashcard.definition}</p>
							<p className="text-sm text-gray-500">
								{flashcard.example}
							</p>

							<div className="card-actions mt-4 flex gap-4">
								<button
									onClick={chuyenTuTiepTheo}
									className="btn btn-outline"
								>
									Quay lại
								</button>
								<button className="btn btn-primary">
									Từ khác
								</button>
							</div>
						</div>
					</div>
				))}
			</main>

			<Footer />
		</div>
	);
}
