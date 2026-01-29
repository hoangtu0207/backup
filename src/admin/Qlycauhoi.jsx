import Footer from "../components/Footer";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

export default function QuestionManager() {
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
              Quản lý câu hỏi
            </h1>
            <button className="btn btn-primary btn-sm">
              Thêm câu hỏi
            </button>
          </div>

          {/* FILTER */}
          <div className="card bg-base-100 shadow mb-6">
            <div className="card-body">
              <label className="font-medium mb-2">
                Chọn đề thi:
              </label>
              <select className="select select-bordered w-full max-w-md">
                <option disabled selected>
                  -- Chọn đề thi --
                </option>
                <option>Đề thi số 1</option>
                <option>Đề thi số 2</option>
              </select>
            </div>
          </div>

          {/* TABLE */}
          <div className="card bg-base-100 shadow">
            <div className="card-body">
              <div className="overflow-x-auto">
                <table className="table table-zebra">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Câu hỏi</th>
                      <th>Đáp án</th>
                      <th>Tác vụ</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>HTML là gì?</td>
                      <td>Ngôn ngữ đánh dấu</td>
                      <td className="space-x-2">
                        <button className="btn btn-xs btn-info">
                          Sửa
                        </button>
                        <button className="btn btn-xs btn-error">
                          Xóa
                        </button>
                      </td>
                    </tr>

                    <tr>
                      <td>2</td>
                      <td>React dùng để làm gì?</td>
                      <td>Xây dựng UI</td>
                      <td className="space-x-2">
                        <button className="btn btn-xs btn-info">
                          Sửa
                        </button>
                        <button className="btn btn-xs btn-error">
                          Xóa
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
