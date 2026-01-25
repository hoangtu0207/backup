export default function Dangnhap() {
	return (
		<div className="min-h-screen flex items-start justify-center pt-15 bg-gradient-to-r from-blue-100 to-white">
			<div className="bg-white rounded-2xl shadow-md p-8 flex gap-12 w-[640px] border border-gray-200">
				<div className="flex-1 flex items-center justify-center">
					<img
						src="/logo.png"
						alt="logo"
						className="w-40 h-40 object-contain"
					/>
				</div>

				<div className="flex-1 flex flex-col justify-center">
					<h2 className="text-3xl font-semibold mb-8 text-gray-800 text-center">
						Đăng nhập
					</h2>
					<div className="space-y-6">
						<div>
							<label className="block text-sm font-medium text-gray-700 mb-1">
								Tài khoản
							</label>
							<input
								className="w-full px-3 py-2 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 bg-gray-100"
								placeholder="Nhập tài khoản"
							/>
						</div>
						<div className="relative">
							<label className="block text-sm font-medium text-gray-700 mb-1">
								Mật khẩu
							</label>
							<input
								className="w-full px-3 py-2 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 bg-gray-100 pr-10"
								placeholder="Nhập mật khẩu"
							/>
						</div>

						<button
							type="button"
							className="px-6 py-2.5 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors mx-auto block"
						>
							Đăng nhập
						</button>
					</div>

					<div className="mt-6 flex items-center justify-between text-sm text-gray-600">
						<a
							href="Dangky"
							className="hover:text-blue-600"
						>
							Đăng ký tài khoản
						</a>
						<a
							href="Quenmatkhau"
							className="hover:text-blue-600"
						>
							Quên mật khẩu?
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
