import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Qlydethi() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="drawer drawer-open min-h-screen">
        <div className="drawer-side">
          <ul className="menu bg-base-200 w-64 min-h-full p-4">
            <h2 className="text-lg font-bold mb-4 text-center">ADMIN</h2>

            <li><a>Dashboard</a></li>
            <li className="bg-primary text-white rounded-lg">
              <a>Quản lý đề thi</a>
            </li>
            <li><a>Quản lý câu hỏi</a></li>
            <li><a>Quản lý flashcards</a></li>
            <li><a>Quản lý người dùng</a></li>

            <div className="mt-auto pt-6">
              <button className="btn btn-error w-full">Đăng xuất</button>
            </div>
          </ul>
        </div>

        <div className="drawer-content p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-xl font-semibold">Quản lý đề thi</h1>
            <button className="btn btn-primary btn-sm">
              Thêm đề thi
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="table table-zebra">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Tiêu đề</th>
                  <th>Mô tả</th>
                  <th>Thời gian</th>
                  <th>Số câu hỏi</th>
                  <th>Tác vụ</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>IELTS Practice Test</td>
                  <td>Đề luyện Reading</td>
                  <td>60 phút</td>
                  <td>40</td>
                  <td className="space-x-2">
                    <button className="btn btn-xs btn-info">Sửa</button>
                    <button className="btn btn-xs btn-error">Xóa</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Footer />
  </div>
      );
}
