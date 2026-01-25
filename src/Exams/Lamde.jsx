import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Lamde() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <span className="material-icons text-gray-700 text-center font-bold ">
        IELTS Simulation
      </span>
      <div className="w-full flex p-10 space-x-10">
        <div class="card border w-2/3">
          <div class="card-body">
            <div className="">
              <h2 class="font-semibold mb-4">Câu 1:</h2>
              <p class="mb-4">She ____ to school every day.</p>

              <label class="flex items-center gap-2">
                <input
                  type="radio"
                  name="q1"
                  class="radio"
                />
                A. go
              </label>

              <label class="flex items-center gap-2">
                <input
                  type="radio"
                  name="q1"
                  class="radio"
                />
                B. goes
              </label>

              <label class="flex items-center gap-2">
                <input
                  type="radio"
                  name="q1"
                  class="radio"
                />
                C. going
              </label>

              <label class="flex items-center gap-2">
                <input
                  type="radio"
                  name="q1"
                  class="radio"
                />
                D. gone
              </label>

            </div>
          </div>
        </div>

        <div class="card border w-1/3">
          <div class="card-body items-center text-center">
            <div class="flex items-center gap-2 mb-4">
              ⏱ Thời gian:{" "}
              <span class="font-semibold">60:00</span>
            </div>

            <div class="grid grid-cols-5 gap-2 mb-6">
              <button class="btn btn-circle btn-xs"></button>
              <button class="btn btn-circle btn-xs"></button>
              <button class="btn btn-circle btn-xs"></button>
              <button class="btn btn-circle btn-xs"></button>
              <button class="btn btn-circle btn-xs"></button>
            </div>

            <button class="btn btn-error rounded-full">
              Nộp bài
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
