import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function UserManager() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* HEADER */}
      <Header />

      {/* MAIN */}
      <div className="flex flex-1">
        {/* SIDEBAR */}
        <Sidebar />

        {/* CONTENT */}
        <main className="flex-1 p-6 bg-base-100">
          {/* TITLE + BUTTON */}
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-xl font-semibold">
              Quản lý người dùng
            </h1>
            <button className="btn btn-primary btn-sm">
              Thêm người dùng
            </button>
          </div>

          {/* TABLE */}
          <div className="card bg-base-100 shadow">
            <div className="card-body">
              <div className="overflow-x-auto">
                <table className="table table-zebra">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Tên người dùng</th>
                      <th>Email</th>
                      <th>Trạng thái</th>
                      <th>Tác vụ</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Nguyễn Văn A</td>
                      <td>a@gmail.com</td>
                      <td>
                        <span className="badge badge-success">
                          Hoạt động
                        </span>
                      </td>
                      <td className="space-x-2">
                        <button className="btn btn-xs btn-info">
                          Sửa
                        </button>
                        <button className="btn btn-xs btn-error">
                          Khóa
                        </button>
                      </td>
                    </tr>

                    <tr>
                      <td>2</td>
                      <td>Trần Thị B</td>
                      <td>b@gmail.com</td>
                      <td>
                        <span className="badge badge-error">
                          Bị khóa
                        </span>
                      </td>
                      <td className="space-x-2">
                        <button className="btn btn-xs btn-info">
                          Sửa
                        </button>
                        <button className="btn btn-xs btn-success">
                          Mở khóa
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
