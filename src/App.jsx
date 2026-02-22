import { Route, Routes } from "react-router-dom";
import Dangky from "./Pages/Auth/Dangky";
import Dangnhap from "./Pages/Auth/Dangnhap";
import Quenmatkhau from "./Pages/Auth/Quenmatkhau";
import Chonthe from "./Pages/Flashcard/Chonthe";
import Flashcard from "./Pages/Flashcard/Flashcard";
import Gioithieu from "./Pages/Gioithieu";
import Home from "./Pages/Home";
import IndexUnLogin from "./Pages/Home/IndexUnLogin";
import Lienhe from "./Pages/Lienhe";
import Chondethi from "./Pages/Exams/Chondethi";
import Lamde from "./Pages/Exams/Lamde";
import Dashboard from "./Pages/admin/Dashboard";
import Qlydethi from "./Pages/admin/Qlydethi";
import Qlycauhoi from "./Pages/admin/Qlycauhoi";
import Qlyflashcards from "./Pages/admin/Qlyflashcards";
import Qlynguoidung from "./Pages/admin/Qlynguoidung";
import Trangcanhan from "./Pages/Auth/Trangcanhan";
import AppLayout from "./layouts/AppLayout";
import AuthLayout from "./layouts/AuthLayout";


function App() {
  return (
    <Routes>
      <Route
        path="/trangchu"
        element={<AppLayout><Home /></AppLayout>}
      />
      <Route
        path="/"
        element={<AppLayout><IndexUnLogin /></AppLayout>}
      />
      <Route
        path="/chonthe"
        element={<AppLayout><Chonthe /></AppLayout>}
      />

      <Route
        path="/flashcard"
        element={<AppLayout><Flashcard /></AppLayout>}
      />
      <Route
        path="/dangnhap"
        element={<AuthLayout><Dangnhap /></AuthLayout>}
      />
      <Route
        path="/dangky"
        element={<AuthLayout><Dangky /></AuthLayout>}
      />
      <Route
        path="/quenmatkhau"
        element={<AuthLayout><Quenmatkhau /></AuthLayout>}
      />
      <Route
        path="/lienhe"
        element={<AppLayout><Lienhe /></AppLayout>}
      />
      <Route
        path="/gioithieu"
        element={<AppLayout><Gioithieu /></AppLayout>}
      />
      <Route
        path="/chondethi"
        element={<AppLayout><Chondethi /></AppLayout>}
      />
      <Route
        path="/lamde"
        element={<AppLayout><Lamde /></AppLayout>}
      />
      <Route
        path="/dashboard"
        element={<AppLayout><Dashboard /></AppLayout>}
      />
      <Route
        path="/quanlydethi"
        element={<AppLayout><Qlydethi /></AppLayout>}
      />
      <Route
        path="/quanlycauhoi"
        element={<AppLayout><Qlycauhoi /></AppLayout>}
      />
      <Route
        path="/quanlyflashcards"
        element={<AppLayout><Qlyflashcards /></AppLayout>}
      />
      <Route
        path="/quanlynguoidung"
        element={<AppLayout><Qlynguoidung /></AppLayout>}
      />
      <Route
        path="/profile"
        element={<AppLayout><Trangcanhan /></AppLayout>}
      />
    </Routes>
  );
}

export default App;
