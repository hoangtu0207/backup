import { Link } from "react-router-dom";
import NavItem from "./Header/NavItem";
import AuthButton from "./Header/AuthButton";

export default function Header() {
	return (
		<div className="flex items-center justify-between px-6 py-3 bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm">
			<div className="flex items-center space-x-2">
				<div className="flex items-center justify-center bg-white">
					<Link to="/">
						<img
							src="../public/logo.png"
							alt="LingGo Logo"
							className="w-14 h-14 object-contain"
						/>
					</Link>
				</div>
			</div>

			<nav className="flex items-center space-x-6">
				{/* <Link className="hover:text-gray-800" to="/Dethi">Đề thi online</Link>
        <Link className="hover:text-gray-800" to="/Chonthe">Flashcards</Link>
        <Link className="hover:text-gray-600" to="/">Đăng xuất</Link> */}
				<NavItem title="/Chondethi" />
				<NavItem title="/Flashcard" />
				<NavItem title="/Trangcanhan" />

				<>
					<AuthButton title="/dangnhap" />
					<AuthButton title="/dangky" />
					{/* <Link to="/Dangnhap" className="btn btn-sm btn-neutral">
                        Đăng nhập
                    </Link>
                    <Link to="/Dangky" className="btn btn-sm btn-neutral">Đăng ký</Link> */}
				</>
			</nav>
		</div>
	);
}
