import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Lienhe() {
  return (
    <>
      <Header />

      <div className="min-h-screen bg-blue-50 flex items-start justify-center pt-20">
        <div className="card bg-base-100 shadow-xl w-full max-w-3xl mx-4">
          <div className="card-body">
            <h1 className="card-title text-3xl justify-center">
              Liên hệ
            </h1>

            <p className="text-center text-lg text-base-content/80">
              Hãy liên hệ với chúng tôi qua các thông tin dưới đây:
            </p>

            <div className="space-y-4 text-lg">
              <p>
                <span className="font-semibold">Hotline:</span>{" "}
                0123 456 789
              </p>

              <p>
                <span className="font-semibold">Email:</span>{" "}
                <a
                  href="mailto:hoanganhtu147@gmail.com"
                  className="link link-primary"
                >
                  hoanganhtu147@gmail.com
                </a>
              </p>

              <p>
                <span className="font-semibold">Địa chỉ:</span>{" "}
                Số 66 ngách 371/9 Kim Mã, Phường Giảng Võ, Thành
                phố Hà Nội, Việt Nam
              </p>
            </div>

          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
