import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Dethi() {
    return (
        <>
            <Header />
            <div className="flex flex-col text-center bg-black/10">
                <div className="mt-10 font-bold text-2xl"> THu vien de thi</div>

                <div className="font-bold text-sm mt-1">
                    lua chon de thi luyen tap
                </div>

                <input type="text" placeholder="Search bar" className="border border-black/50 bg-white my-5 mx-auto w-100 rounded-xl px-5 py-1" />
            </div>

            <div className="mt-20 flex space-x-10 items-center justify-center ">
                <div className="border rounded-xl w-50 h-50 text-center ">
                    <h2 className="my-auto mt-15">IELTS test 1</h2>

                     <a href="/lamdethi">
                        <button className="mt-15 border rounded-2xl px-7 py-1">Chi tiet</button>
                    </a>
                </div>

                <div className="border rounded-xl w-50 h-50 text-center ">
                    <h2 className="my-auto mt-15">IELTS test 1</h2>

                     <a href="/lamdethi">
                        <button className="mt-15 border rounded-2xl px-7 py-1">Chi tiet</button>
                    </a>
                </div>

                <div className="border rounded-xl w-50 h-50 text-center ">
                    <h2 className="my-auto mt-15">IELTS test 1</h2>

                     <a href="/lamdethi">
                        <button className="mt-15 border rounded-2xl px-7 py-1">Chi tiet</button>
                    </a>
                </div>
            </div>
            <Footer />
        </>
    )
}
