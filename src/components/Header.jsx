import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="flex items-center justify-between px-6 py-3 bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm">

      <div className="flex items-center space-x-2">
        <div className="flex items-center justify-center bg-white">
          <Link to="/">
            <img
              src="../public/logo.png"
              alt="LingGo Logo"
              className="w-14 h-14 object-contain" />
          </Link>
        </div>
      </div>

      <nav class="flex items-center space-x-6">
        <Link className="hover:text-blue-600" to="/Chondethi">Đề thi online</Link>
        <Link className="hover:text-blue-600" to="/Chonthe">Flashcards</Link>
        <Link className="hover:text-blue-600" to="/">Đăng xuất</Link>

        <>
          <Link to="/Dangnhap" className="hover:text-blue-600">
            Đăng nhập
          </Link>
          <Link to="/Dangky" className="hover:text-blue-600">Đăng ký</Link>
        </>
      </nav>
    </div>
  );
}
