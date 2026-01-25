import { mockData } from "../../data/mock-data";

export default function IndexLogin() {

  return (
		<div className="h-full">
			<div className="bg-blue-200 text-center py-10 px-4">
				<h1 className="text-2xl md:text-3xl font-bold mb-2">
					Chào mừng bạn đến với LingGo
				</h1>
				<p className="text-gray-700 max-w-2xl mx-auto">
					Chúc bạn có trải nghiệm học tập hiệu quả với LingGo
					<br />
					Hãy bắt đầu học tập ngay hôm nay
				</p>
			</div>

			<div>
				<div className="flex-1 px-6 py-10">
					<div className="text-xl font-semibold text-center mb-8">
						Khóa học Online nổi bật
					</div>

					<div className="grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
						<div className="bg-gray-200 w-40 h-40 justify-center items-center text-center py-auto flex">
							Khoa hoc 1
						</div>
						<div className="bg-gray-200 w-40 h-40 justify-center items-center text-center py-auto flex">
							Khoa hoc 1
						</div>
						<div className="bg-gray-200 w-40 h-40 justify-center items-center text-center py-auto flex">
							Khoa hoc 1
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
