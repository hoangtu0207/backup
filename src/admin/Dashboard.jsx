import Footer from "../components/Footer";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

export default function AdminDashboard() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex">
        <Sidebar />
        <div className="drawer drawer-open min-h-screen">
          {/* SIDEBAR */}
          <div className="drawer-side">
            <ul className="menu bg-base-200 w-64 min-h-full p-4">
              <h2 className="text-lg font-bold text-center mb-6">
                ADMIN
              </h2>

              <li className="bg-primary text-white rounded-lg">
                <a>Dashboard</a>
              </li>
              <li>
                <a>Quản lý đề thi</a>
              </li>
              <li>
                <a>Quản lý câu hỏi</a>
              </li>
              <li>
                <a>Quản lý flashcards</a>
              </li>
              <li>
                <a>Quản lý người dùng</a>
              </li>

              <div className="mt-auto pt-6">
                <button className="btn btn-error w-full">
                  Đăng xuất
                </button>
              </div>
            </ul>
          </div>

          {/* CONTENT */}
          <div className="drawer-content p-6 bg-base-100">
            {/* STAT CARDS */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              <div className="card bg-base-200 shadow">
                <div className="card-body text-center">
                  <p className="font-medium">
                    Tổng số người dùng
                  </p>
                  <h2 className="text-2xl font-bold">120</h2>
                </div>
              </div>

              <div className="card bg-base-200 shadow">
                <div className="card-body text-center">
                  <p className="font-medium">Tổng đề thi</p>
                  <h2 className="text-2xl font-bold">35</h2>
                </div>
              </div>

              <div className="card bg-base-200 shadow">
                <div className="card-body text-center">
                  <p className="font-medium">Tổng bài làm</p>
                  <h2 className="text-2xl font-bold">860</h2>
                </div>
              </div>

              <div className="card bg-base-200 shadow">
                <div className="card-body text-center">
                  <p className="font-medium">Khác</p>
                  <h2 className="text-2xl font-bold">—</h2>
                </div>
              </div>
            </div>

            {/* RECENT EXAMS */}
            <div className="card bg-base-200 shadow">
              <div className="card-body">
                <h3 className="text-lg font-semibold mb-4">
                  Bài làm gần đây
                </h3>

                <div className="overflow-x-auto">
                  <table className="table table-zebra">
                    <thead>
                      <tr>
                        <th>Người dùng</th>
                        <th>Đề thi</th>
                        <th>Điểm</th>
                        <th>Thời gian</th>
                        <th>Ngày hoàn thành</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Nguyễn Văn A</td>
                        <td>IELTS Test 1</td>
                        <td>8.0</td>
                        <td>58 phút</td>
                        <td>12/01/2026</td>
                      </tr>
                      <tr>
                        <td>Trần Thị B</td>
                        <td>TOEIC Test</td>
                        <td>750</td>
                        <td>90 phút</td>
                        <td>11/01/2026</td>
                      </tr>
                      <tr>
                        <td>Lê Văn C</td>
                        <td>Grammar Quiz</td>
                        <td>9.0</td>
                        <td>30 phút</td>
                        <td>10/01/2026</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
