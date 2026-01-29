import { Route, Routes } from "react-router-dom";
import Dangky from "./Auth/Dangky";
import Dangnhap from "./Auth/Dangnhap";
import Quenmatkhau from "./Auth/Quenmatkhau";
import Chonthe from "./Flashcard/Chonthe";
import Flashcard from "./Flashcard/Flashcard";
import Gioithieu from "./Gioithieu";
import Home from "./Home";
import IndexUnLogin from "./Home/IndexUnLogin";
import Lienhe from "./Lienhe";
import Chondethi from "./Exams/Chondethi";
import Lamde from "./Exams/Lamde";
import Dashboard from "./admin/Dashboard";
import Qlydethi from "./admin/Qlydethi";
import Qlycauhoi from "./admin/Qlycauhoi";
import Qlyflashcards from "./admin/Qlyflashcards";
import Qlynguoidung from "./admin/Qlynguoidung";
import Trangcanhan from "./Auth/Trangcanhan";


function App() {
  return (
    <Routes>
      <Route
        path="/trangchu "
        element={<Home />}
      />
      <Route
        path="/"
        element={<IndexUnLogin />}
      />
      <Route
        path="/chonthe"
        element={<Chonthe />}
      />

      <Route
        path="/flashcard"
        element={<Flashcard />}
      />
      <Route
        path="/dangnhap"
        element={<Dangnhap />}
      />
      <Route
        path="/dangky"
        element={<Dangky />}
      />
      <Route
        path="/quenmatkhau"
        element={<Quenmatkhau />}
      />
      <Route
        path="/lienhe"
        element={<Lienhe />}
      />
      <Route
        path="/gioithieu"
        element={<Gioithieu />}
      />
      <Route
        path="/chondethi"
        element={<Chondethi />}
      />
      <Route
        path="/lamde"
        element={<Lamde />}
      />
      <Route
        path="/dashboard"
        element={<Dashboard />}
      />
      <Route
        path="/quanlydethi"
        element={<Qlydethi />}
      />
      <Route
        path="/quanlycauhoi"
        element={<Qlycauhoi />}
      />
      <Route
        path="/quanlyflashcards"
        element={<Qlyflashcards />}
      />
      <Route
        path="/quanlynguoidung"
        element={<Qlynguoidung />}
      />
      <Route
        path="/profile"
        element={<Trangcanhan />}
      />
    </Routes>
  );
}

export default App;
