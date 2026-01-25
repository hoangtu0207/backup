import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Dangnhap() {
	return (
		<div className="min-h-screen flex flex-col">
			<Header />

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
								Đăng nhập
							</h2>

							<div className="space-y-5">
								<div className="form-control">
									<label className="label">
										<span className="label-text">
											Tài khoản
										</span>
									</label>
									<input
										type="text"
										placeholder="Nhập tài khoản"
										className="input input-bordered w-full"
									/>
								</div>

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

								<button className="btn btn-primary w-full mt-2">
									Đăng nhập
								</button>
							</div>

							<div className="mt-6 flex justify-between text-sm">
								<a
									href="Dangky"
									className="link link-hover"
								>
									Đăng ký tài khoản
								</a>
								<a
									href="Quenmatkhau"
									className="link link-hover"
								>
									Quên mật khẩu?
								</a>
							</div>
						</div>
					</div>
				</div>
			</main>

			<Footer />
		</div>
	);
}
