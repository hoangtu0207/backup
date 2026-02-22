export default function Dangky() {
	return (
		<div className="min-h-screen flex flex-col">
			<main className="flex-1 flex items-start justify-center pt-16 bg-gradient-to-r from-blue-100 to-white">
				<div className="card w-[640px] bg-base-100 shadow-xl border border-base-200">
					<div className="card-body flex-row gap-12">
						{/* LOGO */}
						<div className="flex-1 flex items-center justify-center">
							<img
								src="/logo.png"
								alt="logo"
								className="w-40 h-40 object-contain"
							/>
						</div>

						{/* FORM */}
						<div className="flex-1">
							<h2 className="text-3xl font-semibold text-center mb-8">
								Đăng ký
							</h2>

							<div className="space-y-5">
								{/* Họ tên */}
								<div className="form-control">
									<label className="label">
										<span className="label-text">
											Họ và tên
										</span>
									</label>
									<input
										type="text"
										placeholder="Nhập họ và tên"
										className="input input-bordered w-full"
									/>
								</div>

								{/* Email */}
								<div className="form-control">
									<label className="label">
										<span className="label-text">
											Tên đăng nhập hoặc Email
										</span>
									</label>
									<input
										type="email"
										placeholder="Nhập email"
										className="input input-bordered w-full"
									/>
								</div>

								{/* Mật khẩu */}
								<div className="form-control">
									<label className="label">
										<span className="label-text">
											Mật khẩu
										</span>
									</label>
									<input
										type="password"
										placeholder="Nhập mật khẩu"
										className="input input-bordered w-full"
									/>
								</div>

								{/* Xác nhận mật khẩu */}
								<div className="form-control">
									<label className="label">
										<span className="label-text">
											Xác nhận mật khẩu
										</span>
									</label>
									<input
										type="password"
										placeholder="Nhập lại mật khẩu"
										className="input input-bordered w-full"
									/>
								</div>

								<button className="btn btn-primary w-full mt-2">
									Đăng ký
								</button>
							</div>

							<div className="mt-6 text-center text-sm">
								Đã có tài khoản?{" "}
								<a
									href="/Dangnhap"
									className="link link-hover"
								>
									Đăng nhập ngay
								</a>
							</div>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
}
