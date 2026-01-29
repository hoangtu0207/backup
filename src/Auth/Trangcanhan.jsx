import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Trangcanhan() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="min-h-screen bg-base-200 flex items-center justify-center px-4">
        <div className="card w-full max-w-3xl bg-base-100 shadow-xl p-8">
          <h1 className="text-3xl font-bold text-center mb-8">
            Thông tin cá nhân
          </h1>

          <form className="space-y-6">
            {/* Avatar */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="avatar">
                  <div className="w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src="/avatar.png" alt="Profile" />
                  </div>
                </div>

                <button
                  type="button"
                  className="btn btn-primary btn-sm btn-circle absolute bottom-0 right-0"
                >
                  ✏️
                </button>
              </div>
            </div>

            {/* Form thông tin */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Tài khoản</span>
                </label>
                <input
                  type="text"
                  value="hoangtu0207"
                  readOnly
                  className="input input-bordered"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Họ và tên</span>
                </label>
                <input
                  type="text"
                  value="Hoang Tu"
                  className="input input-bordered"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  value="hoanganhtu147@gmail.com"
                  className="input input-bordered"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Số điện thoại</span>
                </label>
                <input
                  type="tel"
                  value="0123456789"
                  className="input input-bordered"
                />
              </div>
            </div>

            {/* Nút cập nhật */}
            <div className="flex justify-center pt-4">
              <button
                type="button"
                className="btn btn-primary px-10"
              >
                Cập nhật
              </button>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  )
}
