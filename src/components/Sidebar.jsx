export default function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-base-200 p-4 flex flex-col">
      {/* TITLE */}
      <h1 className="text-lg font-bold text-center mb-8">
        ADMIN
      </h1>

      {/* MENU */}
      <ul className="menu space-y-2">
        <li className="bg-primary text-white rounded-full">
          <a className="justify-center">Dashboard</a>
        </li>
        <li>
          <a className="justify-center">Quản lý đề thi</a>
        </li>
        <li>
          <a className="justify-center">Quản lý câu hỏi</a>
        </li>
        <li>
          <a className="justify-center">Quản lý flashcards</a>
        </li>
        <li>
          <a className="justify-center">Quản lý người dùng</a>
        </li>
      </ul>

      {/* LOGOUT */}
      <div className="mt-auto">
        <button className="btn btn-error w-full">
          Đăng xuất
        </button>
      </div>
    </aside>
  );
}
