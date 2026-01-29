import Footer from "../components/Footer";
import Header from "../components/Header";
import { mockData } from "../../data/mock-data";

export default function Flashcard() {
	function chuyenTuTiepTheo() {
		console.log("chuyen tu tiep");
	}

    return (
        <div>
            <Header />
            <div className="flex flex-col mt-2 items-center justify-center">
                <h2 className="flex items-center justify-center mb-5 font-bold text-xl">
                    Từ vựng Tiếng Anh giao tiếp cơ bản
                </h2>
                <div className="flex items-center mt-50 border flex-col justify-center">
                    <div className="bg-black/50 ">
                        <div>
                            {mockData.flashcards.map((flashcard) => (
                                <div>
                                    {true ?
                                        <div className="bg-green-300 px-22 py-2 mx-40 my-30">
                                            <div className="py-22 px-30 -my-3">
                                                <p>{flashcard.word}</p>
                                                <p>{flashcard.type}</p>
                                                <p>{flashcard.definition}</p>
                                                <p>{flashcard.example}</p>
                                                <p>{flashcard.phonetic}</p>
                                            </div>
                                        </div>
                                        :
                                        <div>lat the</div>
                                    }
                                </div>
                            ))}

                            <div className="flex justify-between mx-50 mb-4 mt-20">
                                <button
                                    onClick={chuyenTuTiepTheo}
                                    className="bg-blue-400 border rounded-full py1 px-2"
                                >
                                    Quay lai
                                </button>
                                <button className="bg-blue-400 border rounded-full py-1 px-2">
                                    Tu khac
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <Footer /> */}
        </div>
    );
}
