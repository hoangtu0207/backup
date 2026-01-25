import Footer from "./components/Footer";
import Header from "./components/Header";
import IndexLogin from "./Home/IndexLogin";
import IndexUnLogin from "./Home/IndexUnLogin";

export default function Home() {
    return (
        <div>
            <header>
                <Header />
            </header>
            <div>
                {true ? <IndexLogin /> : <IndexUnLogin />}
            </div>
            <footer>
                <Footer />
            </footer>
        </div>
    );
}
