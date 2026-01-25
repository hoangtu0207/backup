export default function Footer() {
	return (
		<footer className="bg-white text-center py-4 mt-auto border-t border-gray-200">
			<p className="text-sm text-gray-600 mb-2">
				&copy; Bản quyền thuộc về{" "}
				<a
					href="mailto:hoanganhtu147@gmail.com"
					className="text-blue-500 hover:underline"
				>
					hoanganhtu147@gmail.com
				</a>
			</p>
			<p className="text-sm text-gray-600">
				<a
					href="Gioithieu"
					className="text-blue-500 hover:underline"
				>
					Giới thiệu
				</a>{" "}
				-{" "}
				<a
					href="lienhe"
					className="text-blue-500 hover:underline"
				>
					Liên hệ
				</a>
			</p>
		</footer>
	);
}
