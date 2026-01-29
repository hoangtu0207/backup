import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Gioithieu() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-blue-50 pt-10 flex items-start justify-center">
        <div className="card bg-base-100 shadow-xl w-full max-w-4xl mx-4">
          <div className="card-body">
            <h1 className="card-title text-3xl">
              Về chúng tôi
            </h1>

            <p className="text-lg">
              LingGo là một nền tảng học tiếng Anh trực tuyến, được
              phát triển nhằm hỗ trợ người học nâng cao kỹ năng từ
              vựng và luyện thi hiệu quả. Với giao diện thân thiện
              và tính năng dễ sử dụng, LingGo phù hợp cho cả học
              sinh, sinh viên và người đi làm.
            </p>

            <div>
              <h2 className="text-xl font-semibold mb-3">
                Ứng dụng cung cấp các chức năng chính như:
              </h2>

              <ul className="list-disc pl-6 space-y-3 text-lg">
                <li>
                  <span className="font-medium">
                    Học từ vựng bằng Flashcards:
                  </span>{" "}
                  Lật thẻ, ghi nhớ từ mới, ôn tập dễ dàng theo
                  chủ đề.
                </li>

                <li>
                  <span className="font-medium">
                    Làm đề thi trực tuyến:
                  </span>{" "}
                  Luyện tập với các bài thi trắc nghiệm, hệ
                  thống tự động chấm điểm và lưu kết quả.
                </li>

                <li>
                  <span className="font-medium">
                    Quản lý tài khoản cá nhân:
                  </span>{" "}
                  Người học có thể theo dõi tiến trình học tập,
                  cập nhật thông tin cá nhân.
                </li>
              </ul>
            </div>

            <p className="text-lg">
              LingGo được phát triển với mục tiêu mang đến cho
              người học một môi trường học tập chủ động, tiện lợi
              và hiệu quả, giúp cải thiện kỹ năng tiếng Anh mọi
              lúc, mọi nơi.
            </p>
            <p className="text-lg">
              Nếu có bất kỳ thắc mắc nào, xin hãy{" "}
              <a
                href="/lienhe"
                className="link link-primary font-medium"
              >
                liên hệ
              </a>{" "}
              với chúng tôi.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
