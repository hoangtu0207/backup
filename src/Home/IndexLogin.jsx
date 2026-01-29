import { mockData } from "../../data/mock-data";

export default function IndexLogin() {
	return (
		<div className="flex flex-col gap-12">
			{/* HERO */}
			<div className="hero bg-blue-200 py-12">
				<div className="hero-content text-center">
					<div className="max-w-xl">
						<h1 className="text-3xl md:text-4xl font-bold mb-4">
							Chào mừng bạn đến với LingGo
						</h1>
						<p className="text-gray-700">
							Chúc bạn có trải nghiệm học tập hiệu quả với LingGo
							<br />
							Hãy bắt đầu học tập ngay hôm nay
						</p>
					</div>
				</div>
			</div>

			{/* FEATURED COURSES */}
			<section className="px-6">
				<h2 className="text-2xl font-semibold text-center mb-8">
					Khóa học Online nổi bật
				</h2>

				<div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 max-w-5xl mx-auto">
					{[1, 2, 3].map((_, index) => (
						<div
							key={index}
							className="card bg-base-100 shadow-xl"
						>
							<div className="card-body items-center text-center">
								<h3 className="card-title">
									Khóa học {index + 1}
								</h3>
								<p className="text-sm text-gray-500">
									Mô tả ngắn về khóa học
								</p>
								<div className="card-actions mt-4">
									<button className="btn btn-primary btn-sm">
										Xem chi tiết
									</button>
								</div>
							</div>
						</div>
					))}
				</div>
			</section>
		</div>
	);
}
