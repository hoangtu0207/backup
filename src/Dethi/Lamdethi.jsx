import Header from "../components/Header";
import Footer from "../components/Footer";
import { mockData } from "../../data/mock-data";

console.log(mockData.practiceQuestions)

export default function Lamdethi() {
    return (
        <div>
            <Header />

            <div className="flex flex-col text-center border-t">
                <div className="font-bold mt-2 mb-10">IELTS test 1</div>

                <div className="flex mt-4">
                    <div className="border px-15 border-black/25 rounded-2xl p-7 w-3/5 max-w-130 ml-auto space-y-4">
                        <div className="space-y-5">
                            {mockData.practiceQuestions.map(
                                (practiceQuestion) => (
                                    <div className=" border-b-2 border-black/15">
                                        <div className="self-start text-left">
                                            cau hoi so {practiceQuestion.id}.
                                        </div>
                                        <div className="ml-2 mt-2 text-sm">
                                            <div className="text-left">
                                                {practiceQuestion.question}
                                            </div>

                                            {/* cau hoi dap an */}
                                            <div className="flex flex-col gap-3 space-x-1.5">
                                                {practiceQuestion.options.map((option) => (

                                                    <div className="ml-2 flex  space-x-1.5">
                                                        <input type="radio" />
                                                        <div className="flex flex-col">
                                                            {option.label}.
                                                            {option.text}
                                                        </div>
                                                    </div>

                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                )
                            )}
                        </div>
                    </div>
                </div>

                <div className="h-70 w-1/5 ml-auto mr-auto  text-center border border-black/25 rounded-2xl p-5 ">
                    <div className="text-xl mb-2">thoi gian 60:00</div>

                    <div className="grid grid-cols-5 gap-2">
                        <input type="radio" />
                        <input type="radio" />
                        <input type="radio" />
                        <input type="radio" />
                        <input type="radio" />
                        <input type="radio" />
                        <input type="radio" />
                        <input type="radio" />
                        <input type="radio" />
                        <input type="radio" />
                        <input type="radio" />
                        <input type="radio" />
                        <input type="radio" />
                        <input type="radio" />
                        <input type="radio" />
                        <input type="radio" />
                        <input type="radio" />
                        <input type="radio" />
                        <input type="radio" />
                        <input type="radio" />
                        <input type="radio" />
                        <input type="radio" />
                        <input type="radio" />
                        <input type="radio" />
                        <input type="radio" />
                    </div>

                    <button className="border bg-red-400 rounded-3xl mt-5 px-4 py-0.5">
                        Nop bai
                    </button>
                </div>
            </div>
            <Footer />
        </div>
    );
}
