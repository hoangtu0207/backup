import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function FlashcardManager() {
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
          {/* TITLE */}
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-xl font-semibold">
              Quản lý Flashcards
            </h1>
            <button className="btn btn-primary btn-sm">
              Thêm chủ đề
            </button>
          </div>

          {/* BODY */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* LEFT - TOPIC LIST */}
            <div className="card bg-base-100 shadow">
              <div className="card-body">
                <h2 className="font-semibold mb-4">
                  Danh sách chủ đề
                </h2>

                <ul className="menu bg-base-200 rounded-box">
                  <li><a>Chủ đề 1</a></li>
                  <li><a>Chủ đề 2</a></li>
                  <li><a>Chủ đề 3</a></li>
                </ul>
              </div>
            </div>

            {/* RIGHT - VOCAB TABLE */}
            <div className="card bg-base-100 shadow lg:col-span-2">
              <div className="card-body">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="font-semibold">
                    Từ vựng
                  </h2>
                  <button className="btn btn-primary btn-sm">
                    Thêm thẻ
                  </button>
                </div>

                <div className="overflow-x-auto">
                  <table className="table table-zebra">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Từ vựng</th>
                        <th>Phát âm</th>
                        <th>Định nghĩa</th>
                        <th>Tác vụ</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Hello</td>
                        <td>/həˈləʊ/</td>
                        <td>Xin chào</td>
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
                        <td>World</td>
                        <td>/wɜːld/</td>
                        <td>Thế giới</td>
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
          </div>
        </main>
      </div>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
